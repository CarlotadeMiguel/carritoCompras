// src/components/Producto.js

import React from 'react';
import { useCart } from '../context/CartContext'; // Importamos el hook useCart

const Producto = ({ id, nombre, precio, imagen }) => {
  const { dispatch } = useCart();

  const agregarAlCarrito = () => {
    dispatch({
      type: 'AGREGAR_PRODUCTO',
      payload: { id, nombre, precio, imagen }
    });
  };

  return (
    <div className="producto-card border p-4 rounded-lg shadow-lg">
      <img src={imagen} alt={nombre} className="w-full h-64 object-cover rounded-md" />
      <h3 className="text-lg font-semibold">{nombre}</h3>
      <p className="text-sm text-gray-500">${precio}</p>
      <button 
        onClick={agregarAlCarrito} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Añadir
      </button>
    </div>
  );
};

export default Producto;
