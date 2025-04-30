import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { cart, dispatch } = useCart();
  const [visible, setVisible] = useState(false);

  const toggleCarrito = () => setVisible(!visible);

  const aumentarCantidad = (id) => {
    dispatch({ type: 'AUMENTAR_CANTIDAD', payload: { id } });
  };
  const disminuirCantidad = (id) => {
    dispatch({ type: 'DISMINUIR_CANTIDAD', payload: { id } });
  };
  const eliminarProducto = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: { id } });
  };
  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  const total = cart.reduce((acc, producto) => acc + producto.precio * producto.quantity, 0);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <button
        className="block md:hidden mb-4 text-indigo-600 font-semibold"
        onClick={toggleCarrito}
      >
        {visible ? 'Ocultar Carrito' : 'Mostrar Carrito'}
      </button>
      {(visible || window.innerWidth >= 768) && (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Carrito</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">El carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((producto) => (
                <li key={producto.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <img src={producto.imagen} alt={producto.nombre} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <h3 className="font-medium text-gray-700">{producto.nombre}</h3>
                      <span className="text-sm text-gray-400">
                        ${producto.precio} x {producto.quantity}
                      </span>
                      <div className="text-xs text-gray-500">
                        Subtotal: ${producto.precio * producto.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => disminuirCantidad(producto.id)}
                    >-</button>
                    <span className="px-2">{producto.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => aumentarCantidad(producto.id)}
                    >+</button>
                    <button
                      className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                      onClick={() => eliminarProducto(producto.id)}
                    >✕</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </button>
          )}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-xl font-bold text-indigo-600">${total}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
