import { NextResponse } from 'next/server';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand, PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import { calculateNextTrxKey, getLastTransactionCode, setLastTransactionCode,hashPassword } from '../../utils/globalStorage';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

// Función para insertar un nuevo elemento en la tabla 'ManagerTransactions'
const insertTransaction = async (transactionData) => {
  const command = new PutCommand({
    TableName: "ManagerTransactions",
    Item: transactionData
  });

  const response = await docClient.send(command);
  setLastTransactionCode(transactionData.trx_key)
  const responseTrxKey = await updateLastTrxKey(transactionData.trx_key)

  console.log(response);
  console.log(responseTrxKey);
  return response;
};

const updateLastTrxKey = async (newCode) => {
  const command = new UpdateCommand({
    TableName: "ManagerDataValues",
    Key: {
      key: 'LAST_TRX_KEY',
    },
    UpdateExpression: "set #val = :newnumber",
    ExpressionAttributeValues: {
      ":newnumber": newCode,
    },
    ExpressionAttributeNames:{
      "#val": "value"
    }
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

export async function POST(request){
  
  const body = await request.json();
  body.trx_key = calculateNextTrxKey(getLastTransactionCode());
  console.log('Datos recibidos:', body);

  insertTransaction(body);

  return NextResponse.json(request);
  //return NextResponse.json(insertTransaction(request));
}

