// src/components/ProductosList.jsx

import React from 'react';
import Producto from './Producto';

// Datos de ejemplo para los productos
const productos = [
  { id: 1, nombre: 'Camiseta', precio: 20, imagen: 'https://picsum.photos/150' },
  { id: 2, nombre: 'Pantalón', precio: 40, imagen: 'https://picsum.photos/150' },
  { id: 3, nombre: 'Zapatos', precio: 60, imagen: 'https://picsum.photos/150' }
];

const ProductosList = () => {
  return (
    <div className="productos-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productos.map((producto) => (
        <Producto 
          key={producto.id} 
          id={producto.id} 
          nombre={producto.nombre} 
          precio={producto.precio} 
          imagen={producto.imagen} 
        />
      ))}
    </div>
  );
};

export default ProductosList;
