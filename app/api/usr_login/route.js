import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SEED_KEY;

export async function POST(request) {
  const { username, password } = await request.json();

  
  // Verificar las credenciales (esto es solo un ejemplo simple)
  if (username === 'admin' && password === 'password123') {
    // Generar un token JWT
    const authToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    
    // Establecer una cookie de autenticación
    const response = NextResponse.json({ message: 'Inicio de sesión exitoso' });
    response.headers.set('Set-Cookie', `authToken=${authToken}; Path=/; HttpOnly; SameSite=Strict`);
    return response;
  } else {
    return NextResponse.json({ message: 'Credenciales incorrectas' }, { status: 401 });
  }
}