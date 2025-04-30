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

  const total = cart.reduce((acc, producto) => acc + producto.precio * producto.quantity, 0);

  return (
    <>
      <button
        className="fixed top-5 right-5 bg-orange-200 text-gray-800 border-none px-4 py-2 rounded-full cursor-pointer z-30 shadow-lg"
        onClick={toggleCarrito}
      >
        {visible ? 'Ocultar carrito' : 'Mostrar carrito'}
      </button>

      <div
        className={`
          fixed top-20 right-0 w-80 max-w-full bg-white text-gray-800 p-6 rounded-xl shadow-2xl z-30 transition-all duration-700
          ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
        style={{ minHeight: '200px' }}
      >
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
                      <h3 className="font-medium">{producto.nombre}</h3>
                      <p className="text-sm text-gray-600">
                        ${producto.precio} x {producto.quantity}
                      </p>
                      <p className="text-sm font-semibold">
                        Subtotal: ${producto.precio * producto.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => aumentarCantidad(producto.id)}
                      className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 transition"
                    >
                      +
                    </button>
                    {producto.quantity > 1 && (
                      <button
                        onClick={() => disminuirCantidad(producto.id)}
                        className="bg-yellow-500 text-white py-2 px-3 rounded-md hover:bg-yellow-600 transition"
                      >
                        -
                      </button>
                    )}
                    {producto.quantity === 1 && (
                      <button
                        onClick={() => eliminarProducto(producto.id)}
                        className="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
