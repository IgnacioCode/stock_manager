"use client";
import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar.js';
import { InfoCard } from './components/card_dashboard/InfoCard.js';
import ModalCreateTrx from './components/modal_create_trx/ModalCreateTrx.jsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateTransaction = (transaction) => {
    // Aquí puedes añadir lógica para guardar la transacción
    handleCloseModal();
  };

  return (
    <div className="bg-bggrey flex grow overflow-x-auto">
      <Sidebar />
      <div className="flex p-[1.3vw] flex-col gap-[1.3vw] items-stretch">

        <div className="flex gap-[1.3vw] ">
          <div className="flex flex-col bg-white p-[1.3vw] h-fit w-fit">
            <h2 className="text-secondary text-[1.3vw] font-bold font-oswald mb-4">ULTIMOS 30 DIAS</h2>
            <div className="flex flex-row bg-white gap-[0.9vw] h-fit w-fit">
              <InfoCard amount1={'999.999.999.999,99'} amount2={'999.999.999,99'} text="Ventas concretadas" bg_color="#00C84D" />
              <InfoCard amount1={'999.999.999.999,99'} amount2={'999.999.999,99'} text="Ventas a cobrar" bg_color="#FEA800" />
              <InfoCard amount1={'999.999.999.999,99'} amount2={'999.999.999,99'} text="Compras y gastos" bg_color="#DB2A2A" />
            </div>
          </div>

          <div className="flex flex-col bg-white p-[1.3vw] w-[20.6vw] items-stretch">
            <h2 className="text-secondary text-[1.3vw] font-bold mb-4">ACCESO RAPIDO</h2>
            <div className='flex flex-col items-center gap-[1.3vw] h-full'>
              <button 
                className="bg-black w-[8.8vw] h-[3.3vw] text-white text-[1.3vw]"
                onClick={handleOpenModal}
              >
                Nueva Venta
              </button>
              <button className="bg-black w-[8.8vw] h-[3.3vw] text-white text-[1.3vw]">Nueva Compra</button>
            </div>
          </div>
        </div>

        <div className="flex gap-[1.3vw] items-stretch h-full">
          <div className="bg-white p-6 w-[44.9vw] ">
            <h2 className="text-secondary text-[1.3vw] font-bold mb-4">ULTIMAS TRANSACCIONES</h2>
            <div className="bg-white w-full ">
              <table className="w-full border-collapse font-titillium">
                <thead>
                  <tr>
                    <th className="border-b p-2 text-center text-primary font-titillium w-1/4">Operacion</th>
                    <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Codigo</th>
                    <th className="border-b p-2 text-center text-primary font-titillium w-1/4">Fecha</th>
                    <th className="border-b p-2 text-center text-primary font-titillium w-1/3">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 1</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 2</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 3</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 4</td>
                  </tr>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 5</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 6</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 7</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 8</td>
                  </tr>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 5</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 6</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 7</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 8</td>
                  </tr>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 5</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 6</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 7</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 8</td>
                  </tr>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 5</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 6</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 7</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 8</td>
                  </tr>
                  <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 5</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Dato 6</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/4">Dato 7</td>
                    <td className="border-b p-2 text-center text-primary font-titillium w-1/3">Dato 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 w-[44.9vw]">
            <h2 className="text-secondary text-[1.3vw] font-bold mb-4">RESUMEN ULTIMOS 15 DIAS</h2>
            <p>Contenido del Panel 4</p>
          </div>
        </div>
      </div>
      <ModalCreateTrx 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onCreate={handleCreateTransaction} 
      />
    </div>
  );
}