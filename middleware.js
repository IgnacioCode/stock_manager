// middleware.js
import { setLastTransactionCode,getLastTransactionCode,calculateNextTrxKey } from './app/utils/globalStorage';
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const aws_region = process.env.AWS_REGION || 'sa-east-1';

const client = new DynamoDBClient({
  region: aws_region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Coloca aquí tu access key
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // Coloca aquí tu secret key
  },
  output:'json'
});
const docClient = DynamoDBDocumentClient.from(client);

const SECRET_KEY = process.env.JWT_SEED_KEY;

export default async function middleware(req) {

  const authToken = req.cookies.get('authToken');
  const REQ_PATH = req.nextUrl.pathname
  const SERVER_FLAG = req.headers.get('server-flag')

  if(SERVER_FLAG){
    return NextResponse.next();
  }

  try {
    // Verificar el token JWT
    await jwtVerify(authToken.value, new TextEncoder().encode(SECRET_KEY));
  } catch (error) {
    // Si el token no es válido o ha expirado, redirigir al login
    console.log("Error del middleware: " + error);
    return NextResponse.redirect(new URL('/login', req.url));
    //return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|api/usr_login|login).*)'],
};