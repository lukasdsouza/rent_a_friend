// src/pages/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Entrar</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 mb-4 w-full" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          className="border p-2 mb-4 w-full" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
