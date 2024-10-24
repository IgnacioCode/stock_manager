import React from 'react';
import Sidebar from '../components/sidebar/Sidebar.js'
import FilterTrx from '../components/trx_filter/FilterTrx.js';

export default function Transactions() {
    return (
        <div className="bg-bggrey flex grow overflow-x-auto gap-[1.3vw] ">
            <Sidebar />
            <div className='flex pt-[1.3vw] pr-[1.3vw] flex-col gap-[1.3vw] items-stretch w-full'>
                <FilterTrx> </FilterTrx>
                <div className="flex gap-[1.3vw] w-full">
                    <div className="bg-white p-6 w-full ">
                        <h2 className="text-secondary text-[1.3vw] font-bold mb-4">ULTIMAS TRANSACCIONES</h2>
                        <div className="bg-white w-full ">
                            <table className="w-full border-collapse font-titillium">
                                <thead>
                                    <tr>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Clave Trasaccion</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Tipo</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Estado</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Fecha y Hora</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Cliente</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Monto</th>
                                        <th className="border-b p-2 text-center text-primary font-titillium w-1/6">Productos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='odd:bg-white even:bg-gray-100'>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">102024000001</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Venta</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Completado</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">2024-10-21 11:41:02</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">Juan Perez</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">$ 1.450.950,00</td>
                                        <td className="border-b p-2 text-center text-primary font-titillium w-1/6">🗃️</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

