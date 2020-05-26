import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menú</h1>
      <Link to="nuevo-platillo" className="mb-5 p-2 bg-blue-700 inline-block text-white font-bold uppercase">
        Agregar platillo
      </Link>
    </>
  );
}
