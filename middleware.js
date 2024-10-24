// middleware.js
import { setLastTransactionCode,getLastTransactionCode,calculateNextTrxKey } from './app/utils/globalStorage';
import { NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SEED_KEY;

export default async function middleware(req) {

  const authToken = req.cookies.get('authToken');
  const REQ_PATH = req.nextUrl.pathname

  if (
    REQ_PATH.startsWith('/_next') || // Archivos estáticos de Next.js
    REQ_PATH.startsWith('/static') || // Archivos estáticos personalizados
    REQ_PATH.startsWith('/api') || // API endpoints
    REQ_PATH === '/login' // Página de login
  ) {
    return NextResponse.next();
  }

  try {
    // Verificar el token JWT
    jwt.verify(authToken, SECRET_KEY);
  } catch (error) {
    // Si el token no es válido o ha expirado, redirigir al login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (REQ_PATH === '/') {
    if (getLastTransactionCode() == '000000000000') {
      // Llamar al servicio externo para obtener el código inicial
      /*const response = await fetch('https://mi-servicio-externo.com/api/trx-code');
      const data = await response.json();*/
      setLastTransactionCode(calculateNextTrxKey('000000000000'));
      console.log('Código de transacción inicial cargado:', getLastTransactionCode());
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static).*)'],
};