import { NextResponse } from 'next/server';
import { calculateNextTrxKey, getLastTransactionCode, setLastTransactionCode } from '../../utils/globalStorage';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(request) {

  const url = new URL(request.url)
  const params = new URLSearchParams(request.url)
  
  let lastEvaluatedKey = params.get('lastEvaluatedKey')?params.get('lastEvaluatedKey'):null;
  let limit = params.get('limit')?params.get('limit'):20;

  const command = new ScanCommand({
    TableName: "ManagerTransactions",
    Limit: limit,
    ...(lastEvaluatedKey && { ExclusiveStartKey: lastEvaluatedKey }),
  });
  try{
    const responseDB = await docClient.send(command);
    let responseServer = {
      transactions:responseDB.Items,
      LastEvaluatedKey:responseDB.LastEvaluatedKey
    }
    return NextResponse.json(responseServer);
  }
  catch(e){
    console.log(e);
    return NextResponse.json({ message: 'Error al obtener las TRX: ' + e }, { status: 401 })
  }

}