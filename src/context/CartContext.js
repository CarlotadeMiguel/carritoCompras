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
      case 'AGREGAR_PRODUCTO':
        // Buscar si el producto ya está en el carrito
        const productoExistente = state.find(producto => producto.id === action.payload.id);
        
        if (productoExistente) {
          // Si ya existe, incrementamos la cantidad
          return state.map(producto =>
            producto.id === action.payload.id
              ? { ...producto, quantity: producto.quantity + 1 }
              : producto
          );
        } else {
          // Si no existe, agregamos el producto con quantity: 1
          return [...state, { ...action.payload, quantity: 1 }];
        }
  
      case 'ELIMINAR_PRODUCTO':
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
