// src/context/CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

// Inicializamos el contexto
const CartContext = createContext();

// Definir el estado inicial
const initialState = JSON.parse(localStorage.getItem('carrito')) || [];

// Definir las acciones
const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';

// Reducer que gestionará las acciones
const cartReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      // Agregar producto al carrito
      return [...state, action.payload];
    
    case ELIMINAR_PRODUCTO:
      // Eliminar producto del carrito
      return state.filter(producto => producto.id !== action.payload.id);
    
    default:
      return state;
  }
};

// CartProvider que envolverá la app
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Cada vez que el estado del carrito cambie, lo guardamos en localStorage
  React.useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useCart = () => useContext(CartContext);
