// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo / Título */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-500">
              SocialAtividades
            </Link>
          </div>
          {/* Links para telas maiores */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/create-activity" className="px-3 py-2 text-gray-700 hover:text-blue-500">
              Criar Atividade
            </Link>
            <Link to="/profile" className="px-3 py-2 text-gray-700 hover:text-blue-500">
              Perfil
            </Link>
            <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-blue-500">
              Entrar
            </Link>
          </div>
          {/* Botão para menu mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/create-activity" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
              Criar Atividade
            </Link>
            <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
              Perfil
            </Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
