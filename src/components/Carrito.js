// src/components/Carrito.js

import React from 'react';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { cart, dispatch } = useCart();

  // Aumentar cantidad
  const aumentarCantidad = (id) => {
    dispatch({
      type: 'AUMENTAR_CANTIDAD',
      payload: { id },
    });
  };

  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    dispatch({
      type: 'DISMINUIR_CANTIDAD',
      payload: { id },
    });
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    dispatch({
      type: 'ELIMINAR_PRODUCTO',
      payload: { id },
    });
  };

  // Calcular el total usando reduce()
  const total = cart.reduce((acc, producto) => acc + producto.precio * producto.quantity, 0);

  return (
    <div className="carrito-container p-6">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((producto) => (
              <li key={producto.id} className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio} x {producto.quantity}</p>
                    <p>Subtotal: ${producto.precio * producto.quantity}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => aumentarCantidad(producto.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    +
                  </button>
                  {producto.quantity > 1 && (<button
                    onClick={() => disminuirCantidad(producto.id)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                  >
                    -
                  </button>
                )}

                  {producto.quantity === 1 && (
                    <button
                      onClick={() => eliminarProducto(producto.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="total mt-6">
            <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
