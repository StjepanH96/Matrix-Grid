import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useGridState } from './GridState';  

describe('useGridState', () => {
  test('initial state', () => {
    const { result } = renderHook(() => useGridState());
    expect(result.current.path).toBe('');
    expect(result.current.collectedLetters).toBe('');
  });

  test('traverseGrid function with a valid grid', () => {
    const { result } = renderHook(() => useGridState());

    act(() => {
      result.current.traverseGrid();
    });

    expect(result.current.path).toBe('@---A---+|C|+---+|+-B-x');
    expect(result.current.collectedLetters).toBe('ACB');
  });

  test('resetGrid function resets the state', () => {
    const { result } = renderHook(() => useGridState());

    act(() => {
      result.current.traverseGrid();
    });

    act(() => {
      result.current.resetGrid();
    });

    expect(result.current.path).toBe('');
    expect(result.current.collectedLetters).toBe('');
  });
});
