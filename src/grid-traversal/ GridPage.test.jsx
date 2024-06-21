import { render, screen, fireEvent } from '@testing-library/react';
import { GridTraversal } from './GridPage';

describe('GridTraversal Component', () => {
  test('renders and can trigger traversal', () => {
    render(<GridTraversal />);
    const traverseButton = screen.getByRole('button', { name: /traverse grid/i });
    fireEvent.click(traverseButton);
  });

  test('renders and can reset', () => {
    render(<GridTraversal />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);
 
  });
});
