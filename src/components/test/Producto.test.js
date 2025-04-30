import { render, screen, fireEvent } from '@testing-library/react';
import Producto from '../Producto'; // Corrige el path
import { CartProvider } from '../../context/CartContext'; // Corrige el nombre y el path
import * as CartContextModule from '../../context/CartContext'; // Para mockear el hook

describe('Producto', () => {
  const producto = {
    id: 1,
    nombre: 'Camiseta',
    precio: 20,
    imagen: 'https://picsum.photos/150',
  };

  it('renderiza correctamente el producto', () => {
    render(
      <CartProvider>
        <Producto {...producto} />
      </CartProvider>
    );
    expect(screen.getByText(/Camiseta/i)).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
    expect(screen.getByAltText(/Camiseta/i)).toHaveAttribute('src', 'https://picsum.photos/150');
  });

  it('llama a dispatch al hacer clic en "Añadir al carrito"', () => {
    const mockDispatch = jest.fn();
    // Mockea el hook useCart para este test
    jest.spyOn(CartContextModule, 'useCart').mockReturnValue({ dispatch: mockDispatch });

    render(<Producto {...producto} />);
    fireEvent.click(screen.getByText('Añadir al carrito'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'AGREGAR_PRODUCTO',
      payload: producto,
    });

    jest.restoreAllMocks();
  });
});
