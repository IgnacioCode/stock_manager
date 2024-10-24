'use client';
import React, { useState } from 'react';

export default function ModalCreateTrx({ isOpen, onClose, onCreate }){
    const [trx_key, setTrxKey] = useState('');
  const [clientName, setClientName] = useState('');
  const [operationType, setOperationType] = useState('venta');
  const [product, setProduct] = useState('producto1');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');

  const handleCreateTransaction = async (transaction) => {
    console.log('Nueva transacción:', transaction);
    try {
      const response = await fetch('/api/create_trx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error('Error al insertar la transacción');
      }

      const data = await response.json();
      console.log('Transacción insertada:', data);
    } catch (error) {
      console.error('Error al insertar la transacción:', error);
    }
    onClose();
  };

  const handleCreate = () => {
    const newTransaction = {
      trx_key,
      clientName,
      operationType,
      product,
      date,
      amount,
    };
    handleCreateTransaction(newTransaction);
    onClose();
  };



  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-secondary text-[1.3vw] font-bold mb-4">Crear Nueva Transacción</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary font-titillium block mb-1">Nombre del Cliente:</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="text-primary font-titillium border p-2 w-full"
            />
          </div>
          <div>
            <label className="text-primary font-titillium block  mb-1">Tipo de Operación:</label>
            <select
              value={operationType}
              onChange={(e) => setOperationType(e.target.value)}
              className="text-primary font-titillium border p-2 w-full"
            >
              <option value="venta">Venta</option>
              <option value="compra">Compra</option>
            </select>
          </div>
          <div>
            <label className="text-primary font-titillium block  mb-1">Producto:</label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="text-primary font-titillium border p-2 w-full"
            >
              <option value="producto1">Producto 1</option>
              <option value="producto2">Producto 2</option>
              <option value="producto3">Producto 3</option>
            </select>
          </div>
          <div>
            <label className="text-primary font-titillium block  mb-1">Fecha:</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-primary font-titillium border p-2 w-full"
            />
          </div>
          <div>
            <label className="text-primary font-titillium block  mb-1">Monto:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-primary font-titillium border p-2 w-full"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleCreate}
            className="bg-primary text-white px-4 py-2 hover:bg-secondary transition"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}