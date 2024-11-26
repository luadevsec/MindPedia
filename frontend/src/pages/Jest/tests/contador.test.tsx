import { render, fireEvent } from '@testing-library/react';
import Contador from '../components/contador';
import { describe, expect, it } from 'vitest';

describe('Componente Contador', () => {
  it('deve resetar o contador ao clicar em Resetar', () => {
    const { getByTestId, getByText } = render(<Contador />);

    const subirButton = getByText('Subir');
    const resetButton = getByText('Resetar');

    fireEvent.click(subirButton);  // Incrementa para 1
    fireEvent.click(subirButton);  // Incrementa para 2
    fireEvent.click(resetButton);  // Reseta para 0

    // Verifica se o contador foi resetado para 0
    const contadorValue = getByTestId('contador-value');
    expect(contadorValue.textContent).toBe('0');
  });
});
