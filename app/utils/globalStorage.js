// utils/globalStorage.js
import GlobalConfig from '../app.config.js'

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

export function setLastTransactionCode(code) {
    GlobalConfig.LAST_TRX_CODE = code;
}

export function getLastTransactionCode() {
  return GlobalConfig.LAST_TRX_CODE;
}
