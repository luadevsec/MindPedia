import { renderHook, act } from '@testing-library/react-hooks';
import useAvaliador from '../hooks/useAvaliador'; // Ajuste o caminho conforme necessário
import { describe, test, expect } from 'vitest';

describe('useAvaliador', () => {
  test('deve atualizar o estado "avaliador" para true se o nome for "tqs"', () => {
    const { result } = renderHook(() => useAvaliador(''));

    // Simula a mudança do nome para "tqs"
    act(() => {
      result.current.avaliadorador('tqs');
    });

    // Verifica se o valor de 'avaliador' é true
    expect(result.current.avaliador).toBe(true);
  });

  test('deve atualizar o estado "avaliador" para false se o nome não for "tqs"', () => {
    const { result } = renderHook(() => useAvaliador(''));

    // Simula a mudança do nome para algo diferente de "tqs"
    act(() => {
      result.current.avaliadorador('outroNome');
    });

    // Verifica se o valor de 'avaliador' é false
    expect(result.current.avaliador).toBe(false);
  });

  test('deve manter o valor de "avaliador" após múltiplas atualizações', () => {
    const { result } = renderHook(() => useAvaliador(''));

    // Simula a mudança do nome para "tqs"
    act(() => {
      result.current.avaliadorador('tqs');
    });

    // Verifica se o valor de 'avaliador' é true
    expect(result.current.avaliador).toBe(true);

    // Simula a mudança do nome para algo diferente de "tqs"
    act(() => {
      result.current.avaliadorador('outroNome');
    });

    // Verifica se o valor de 'avaliador' foi atualizado para false
    expect(result.current.avaliador).toBe(false);
  });
});
