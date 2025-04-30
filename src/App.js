import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductosList from './components/ProductosList';


import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1 className="text-2xl text-center my-8">Carrito de Compras</h1>
        <ProductosList />
      </div>
    </CartProvider>
  );
}

export default App;
