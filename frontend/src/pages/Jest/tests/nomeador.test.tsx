import { renderHook, act } from '@testing-library/react-hooks';
import useNomeador from '../hooks/useNomeador';
import { describe, test, expect } from 'vitest';

describe('Teste do nomeador', () => {
  test('Testando o nomeador', () => {
    // Renderiza o hook
    const { result } = renderHook(() => useNomeador('Nome'));

    // Verifica o nome inicial
    expect(result.current.nome).toBe('Nome');

    // Chama a função nomeador para atualizar o nome
    act(() => {
      result.current.nomeador('Nome2');
    });

    // Verifica se o nome foi atualizado corretamente
    expect(result.current.nome).toBe('Nome2');
  });
});
