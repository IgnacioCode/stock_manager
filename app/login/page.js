"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/usr_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });
      console.log(response);
      if (response.ok) {
        
        router.push('/');
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Error de red. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bggrey">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">INICIAR SESIÓN</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-lg font-titillium text-primary">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="font-titillium text-primary mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-titillium text-primary">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mfont-titillium text-primary t-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
