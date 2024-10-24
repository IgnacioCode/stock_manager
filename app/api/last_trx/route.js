import { NextResponse } from 'next/server';
import { calculateNextTrxKey, getLastTransactionCode, setLastTransactionCode } from '../../utils/globalStorage';

export async function GET(request){
  console.log(getLastTransactionCode())
    const transactions = [
        {
          date: '2024-10-01',
          client: 'Juan Pérez',
          paymentMethod: 'Tarjeta',
          status: 'Completada',
          totalAmount: '$1,000.00',
          transactionId: '#123456',
        },
        {
          date: '2024-10-02',
          client: 'María García',
          paymentMethod: 'Efectivo',
          status: 'Pendiente',
          totalAmount: '$500.00',
          transactionId: '#123457',
        },
      ];
    
      return NextResponse.json(transactions);

}