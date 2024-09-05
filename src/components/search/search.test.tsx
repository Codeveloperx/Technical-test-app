import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Search from './index';

afterEach(() => {
    // Limpiar el DOM
    cleanup();
  });

describe('Componente Search', () => {
  it('renderiza correctamente', () => {
    render(<Search />);

    const searchInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchInput).toBeDefined();
    expect(searchInput.placeholder).toBe('Search pokemons.');
  });

  it('actualiza el valor al cambiar el input', () => {
    render(<Search />);

    const searchInput = screen.getByTestId('box-search') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'pikachu' } });

    expect(searchInput.value).toBe('pikachu');
  });

  it('dispara el evento onChange al cambiar el input', () => {
    const handleChange = vi.fn();
    render(<Search onChange={handleChange} />);

    fireEvent.change(screen.getByTestId('box-search'), {target: {value: 'char'}})
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange.mock.calls[0][0].target.value).toBe('char');
  });

});