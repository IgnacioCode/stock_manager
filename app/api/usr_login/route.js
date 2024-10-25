import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { verifyPassword } from '../../utils/globalStorage';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const SECRET_KEY = process.env.JWT_SEED_KEY;

export async function POST(request) {
  const { username, password } = await request.json();

  console.log("Datos recibidos " + username + " " + password)

  const command = new GetCommand({
    TableName: "ManagerUsers",
    Key: {
      user_key: "admin",
    },
  });

  const response = await docClient.send(command);
  const serverPassword = response.Item.password;
  const serverUsername = response.Item.user_key;
  

  if (serverUsername === username && verifyPassword(password,serverPassword)) {
    // Generar un token JWT
    const authToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    
    // Establecer una cookie de autenticación
    let response = NextResponse.json({ message: 'Inicio de sesión exitoso' });
    response.headers.set('Set-Cookie', `authToken=${authToken}; Path=/; HttpOnly; SameSite=Strict`);

    return response;
    
  } else {
    return NextResponse.json({ message: 'Credenciales incorrectas' }, { status: 401 });
  }
}