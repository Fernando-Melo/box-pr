import React from 'react';

export default function Login() {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <input className="block w-full border rounded mb-2 p-2" placeholder="Email" />
      <input className="block w-full border rounded mb-2 p-2" placeholder="Senha" type="password" />
      <button className="bg-blue-600 text-white p-2 rounded w-full">Entrar</button>
    </div>
  );
}
