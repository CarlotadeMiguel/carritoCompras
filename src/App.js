import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductosList from './components/ProductosList';
import Carrito from './components/Carrito';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <header className="w-full py-8 bg-white shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center tracking-tight">Tienda</h1>
        </header>
        <main className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-4">
          <section className="flex-1">
            <ProductosList />
          </section>
          <aside className="w-full md:w-96">
            <Carrito />
          </aside>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
