'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex h-max min-h-screen`}>
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-[8vw]' : 'w-[3vw]'} bg-white h-max min-h-screen pt-2 shadow-md transition-all duration-300 ease-in-out flex flex-col items-center`}
      >
        <button
          className="p-4 text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF6000" className="h-[1.3vw] w-[1.3vw]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1.3vw] w-[1.3vw]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF6000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <nav className="mt-5 w-full">
          <ul className="flex flex-col items-center w-full">
            <li className="mb-4 w-full">
              <a
                href="/"
                className="flex items-center justify-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1C1C1C" className="h-[1.3vw] w-[1.3vw]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                {isOpen && <span className="ml-2">Inicio</span>}
              </a>
            </li>
            <li className="mb-4 w-full">
              <a
                href="/transactions"
                className="flex items-center justify-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1C1C1C" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>

                {isOpen && <span className="ml-2">Transacciones</span>}
              </a>
            </li>
            <li className="mb-4 w-full">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1C1C1C" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

                {isOpen && <span className="ml-2">Productos</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
