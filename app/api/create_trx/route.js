import { NextResponse } from 'next/server';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand, PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { calculateNextTrxKey, getLastTransactionCode, setLastTransactionCode,hashPassword } from '../../utils/globalStorage';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

let semaphore = false;

function acquireSemaphore() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (!semaphore) {
        semaphore = true;
        clearInterval(interval);
        resolve();
      }else{
        //console.log("Me quede esperando");
      }
    }, 50); // Verifica cada 50 ms si el recurso está disponible
  });
}
function releaseSemaphore() {
  semaphore = false;
}

// Función para insertar un nuevo elemento en la tabla 'ManagerTransactions'
const insertTransaction = async (transactionData) => {
  const command = new PutCommand({
    TableName: "ManagerTransactions",
    Item: transactionData
  });

  const response = await docClient.send(command);
  setLastTransactionCode(transactionData.trx_key)
  const responseTrxKey = await updateLastTrxKey(transactionData.trx_key)

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
  return response;
};

export async function POST(request){
  
  const body = await request.json();
  let response;
  await acquireSemaphore()
  try{
    let last_trx_code = await getLastTransactionCode()
    body.trx_key = calculateNextTrxKey(last_trx_code);
    console.log('Datos recibidos:', body);
    await insertTransaction(body);
    response = NextResponse.json({ message: 'TRX creada exitosamente' }, { status: 201 })
  }
  catch(e){
    console.log("Error al intentar crear una TRX " + e);
    response = NextResponse.json({ message: 'Credenciales incorrectas' + e}, { status: 401 });
  }
  finally{
    releaseSemaphore()
    return response;
  }

}

