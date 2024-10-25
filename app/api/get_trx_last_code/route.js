import { NextResponse } from 'next/server';

import { getLastTransactionCode} from '../../utils/globalStorage';


export async function GET(request) {
    const last_trx_code = await getLastTransactionCode();
    return NextResponse.json({ last_trx_code: last_trx_code });
}