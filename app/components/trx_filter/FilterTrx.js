'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FilterTrx(){
    const [trxCode, setTrxCode] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [clientName, setClientName] = useState('');
  const [operationType, setOperationType] = useState('');
  const [product, setProduct] = useState('');

  const handleFilter = () => {
    const filters = {
      trxCode,
      startDate,
      endDate,
      clientName,
      operationType,
      product,
    };
    onFilter(filters);
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-secondary text-[1.3vw] font-bold mb-4">FILTROS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Código de TRX:</label>
          <input
            type="text"
            value={trxCode}
            onChange={(e) => setTrxCode(e.target.value)}
            className="border p-2  w-full"
          />
        </div>
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Fecha y Hora (Inicio):</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="text-primary font-titillium border p-2  w-full"
          />
        </div>
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Fecha y Hora (Fin):</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="text-primary font-titillium border p-2  w-full"
          />
        </div>
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Nombre del Cliente:</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="border p-2  w-full"
          />
        </div>
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Tipo de Operación:</label>
          <select
            value={operationType}
            onChange={(e) => setOperationType(e.target.value)}
            className="text-primary font-titillium border p-2  w-full"
          >
            <option value="">Seleccione un tipo</option>
            <option value="venta">Venta</option>
            <option value="compra">Compra</option>
          </select>
        </div>
        <div>
          <label className="text-primary font-titillium block text-gray-700 mb-1">Producto:</label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="text-primary font-titillium border p-2 w-full"
          >
            <option value="">Seleccione un producto</option>
            <option value="producto1">Producto 1</option>
            <option value="producto2">Producto 2</option>
            <option value="producto3">Producto 3</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleFilter}
          className="bg-primary text-white px-4 py-2  hover:bg-secondary transition"
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}