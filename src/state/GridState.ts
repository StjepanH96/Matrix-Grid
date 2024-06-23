import { useState, useCallback } from 'react';

type UpperCaseLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
type GridElement = '@' | '-' | '+' | '|' | 'x' | ' ' | '' | UpperCaseLetter;
type Grid = GridElement[][];

const initialGrid: Grid = [
  ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
  [' ', ' ', ' ', ' ', '|', '', ' ', ' ', '|'],
  [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
];

export const useGridState = () => {
  const [path, setPath] = useState<string>('');
  const [collectedLetters, setCollectedLetters] = useState<string>('');
  const [grid, setGrid] = useState<Grid>(initialGrid);

  const traverseGrid = useCallback(() => {
    let atCount = 0;
    let hasEnd = false; 
    let row: number = 0;
    let col: number = 0;
    let direction: [number, number] = [0, 1]; 
    let collected = new Set<string>();
    let pathLog = [];
    let visited = new Set<string>();

    grid.forEach((r, i) => r.forEach((c, j) => {
      if (c === '@') {
        atCount++;
        row = i;
        col = j;
      }
      if (c === 'x') {
        hasEnd = true;
      }
    }));

    if (!hasEnd) {
      alert("Invalid map: No end point 'x' found.");
      return;
    }

    if (atCount === 0) {
      alert("Invalid map: No starting point '@' found.");
      return;
    } else if (atCount > 1) {
      alert("Invalid map: Multiple starting points '@' found.");
      return;
    }

    while (row >= 0 && row < grid.length && col >= 0 && col < grid[row].length) {
      let current = grid[row][col];
      pathLog.push(current);

      if (/[A-Z]/.test(current) && !collected.has(current)) {
        collected.add(current);
      }

      if (current === 'x') {
        break;
      }

      if (current === '+') {
        const possibleDirections: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        direction = possibleDirections.find(dir => {
          let newRow = row + dir[0];
          let newCol = col + dir[1];
          return newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[newRow].length && !visited.has(`${newRow},${newCol}`) && grid[newRow][newCol] !== ' ';
        }) || [0, 0];
      }

      visited.add(`${row},${col}`);
      row += direction[0];
      col += direction[1];
    }

    setCollectedLetters(Array.from(collected).join(''));
    setPath(pathLog.join(''));
  }, [grid]);

  const resetGrid = useCallback(() => {
    setPath('');
    setCollectedLetters('');
  }, []);

  return {
    path,
    collectedLetters,
    traverseGrid,
    resetGrid
  };
}
