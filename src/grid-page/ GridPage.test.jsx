import { render, screen, fireEvent } from '@testing-library/react';
import { GridPage } from './GridPage';

describe('GridPage Component', () => {
  test('renders and can trigger traversal', () => {
    render(<GridPage />);
    const traverseButton = screen.getByRole('button', { name: /traverse grid/i });
    fireEvent.click(traverseButton);
  });

  test('renders and can reset', () => {
    render(<GridPage />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);
 
  });
});
