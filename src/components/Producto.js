import React from 'react';
import { useCart } from '../context/CartContext';

const Producto = ({ id, nombre, precio, imagen }) => {
  const { dispatch } = useCart();
  const agregarAlCarrito = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: { id, nombre, precio, imagen } });
  };
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center">
      <img src={imagen} alt={nombre} className="w-28 h-28 object-cover rounded mb-4" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{nombre}</h2>
      <span className="text-indigo-600 font-bold text-xl mb-4">${precio}</span>
      <button
        onClick={agregarAlCarrito}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-medium"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Producto;
