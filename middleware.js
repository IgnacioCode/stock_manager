// middleware.js
import { setLastTransactionCode,getLastTransactionCode,calculateNextTrxKey } from './app/utils/globalStorage';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
  if (req.nextUrl.pathname === '/') {
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
