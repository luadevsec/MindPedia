import { renderHook, act } from '@testing-library/react-hooks';
import useThemeador from '../hooks/useThemeador'; // ajuste o caminho conforme necessário
import { describe, test, expect } from 'vitest';

describe('useThemeador', () => {
  test('deve alternar entre temas light e dark', () => {
    // Renderiza o hook
    const { result } = renderHook(() => useThemeador());

    // Verifica o valor inicial (deve ser 'light')
    expect(result.current.theme).toBe('light');

    // Alterna o tema para 'dark'
    act(() => {
      result.current.toggleTheme();
    });

    // Verifica se o tema mudou para 'dark'
    expect(result.current.theme).toBe('dark');

    // Alterna novamente o tema para 'light'
    act(() => {
      result.current.toggleTheme();
    });

    // Verifica se o tema voltou para 'light'
    expect(result.current.theme).toBe('light');
  });
});
