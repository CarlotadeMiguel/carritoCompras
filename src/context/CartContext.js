// src/context/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import Toast from '../components/Toast'; // Crea este componente

// Inicializamos el contexto
const CartContext = createContext();
// Definir el estado inicial
const initialState = {
  cart: JSON.parse(localStorage.getItem('carrito')) || [],
  toast: { show: false, message: '', type: 'success' }
};

// Definir las acciones
const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';
const AUMENTAR_CANTIDAD = 'AUMENTAR_CANTIDAD';
const DISMINUIR_CANTIDAD = 'DISMINUIR_CANTIDAD';
const OCULTAR_TOAST = 'OCULTAR_TOAST';
const VACIAR_CARRITO = 'VACIAR_CARRITO';



// Reducer que gestionará las acciones
const cartReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO: {
      const productoExistente = state.cart.find(producto => producto.id === action.payload.id);
      const updatedCart = productoExistente
        ? state.cart.map(producto =>
            producto.id === action.payload.id
              ? { ...producto, quantity: producto.quantity + 1 }
              : producto
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];
      
      return {
        ...state,
        cart: updatedCart,
        toast: { show: true, message: '🛒 Producto agregado', type: 'success' }
      };
    }

    case ELIMINAR_PRODUCTO: {
      return {
        ...state,
        cart: state.cart.filter(producto => producto.id !== action.payload.id),
        toast: { show: true, message: '🗑 Producto eliminado', type: 'error' }
      };
    }

    case AUMENTAR_CANTIDAD: {
      return {
        ...state,
        cart: state.cart.map(producto =>
          producto.id === action.payload.id
            ? { ...producto, quantity: producto.quantity + 1 }
            : producto
        )
      };
    }

    case DISMINUIR_CANTIDAD: {
      return {
        ...state,
        cart: state.cart.map(producto =>
          producto.id === action.payload.id && producto.quantity > 1
            ? { ...producto, quantity: producto.quantity - 1 }
            : producto
        )
      };
    }

    case VACIAR_CARRITO: {
      return {
        ...state,
        cart: [],
        toast: { show: true, message: '🧹 Carrito vaciado', type: 'success' }
      };
    }
    
    case OCULTAR_TOAST: {
      return { ...state, toast: { ...state.toast, show: false } };
    }

    default:
      return state;
  }
};

// CartProvider que envolverá la app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cada vez que el estado del carrito cambie, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(state.cart));
  }, [state.cart]);

  // Auto-ocultar toast
  useEffect(() => {
    if (state.toast.show) {
      const timer = setTimeout(() => {
        dispatch({ type: OCULTAR_TOAST });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.toast.show]);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
      <Toast
        show={state.toast.show}
        message={state.toast.message}
        type={state.toast.type}
      />
    </CartContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useCart = () => useContext(CartContext);
