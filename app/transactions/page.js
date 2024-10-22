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
                </div>
            </div>

        </div>
    )

}

