import GlobalConfig from '../app.config.js'
import bcrypt from 'bcryptjs';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const aws_region = process.env.AWS_REGION || 'sa-east-1'

const client = new DynamoDBClient({
  region: aws_region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const docClient = DynamoDBDocumentClient.from(client);

export function calculateNextTrxKey(input) {
  // Extraer las partes del string de entrada
  const year = input.substring(0, 4);
  const month = input.substring(4, 6);
  const number = parseInt(input.substring(6), 10);

  // Obtener el mes y año actual
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear().toString();

  // Comparar mes y año actuales con los recibidos
  if (month === currentMonth && year === currentYear) {
    // Si el mes y año coinciden, incrementar el número
    const newNumber = (number + 1).toString().padStart(6, '0');
    return `${year}${month}${newNumber}`;
  } else {
    // Si no coinciden, actualizar mes y año y reiniciar el número
    return `${currentYear}${currentMonth}000001`;
  }
}

export async function setLastTransactionCode(code) {
  //const client = new DynamoDBClient({});
  //const docClient = DynamoDBDocumentClient.from(client);

  const command = new UpdateCommand({
    TableName: "ManagerDataValues",
    Key: {
      key: 'LAST_TRX_KEY',
    },
    UpdateExpression: "set #val = :newnumber",
    ExpressionAttributeValues: {
      ":newnumber": code,
    },
    ExpressionAttributeNames: {
      "#val": "value"
    }
  });
  try {
    const response = await docClient.send(command);
    console.log(response);
    return response;
  }
  catch (e) {
    console.log("Error al setear cod trx: " + e);
  }

}

export async function getLastTransactionCode() {

  const command = new GetCommand({
    TableName: "ManagerDataValues",
    Key: {
      key: "LAST_TRX_KEY",
    },
  })
  try {
    const response = await docClient.send(command);
    setLastTransactionCode(response.Item.value);
    return response.Item.value
  }
  catch (e) {
    console.log("Error al obtener cod trx: " + e);
  }
};

export function hashPassword(plainInput) { // Número de iteraciones del algoritmo, a mayor número, mayor seguridad y costo computacional
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainInput, salt);
}

export function verifyPassword(plainPassword, hashedPassword) {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}