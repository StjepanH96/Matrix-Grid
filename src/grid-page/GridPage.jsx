
import { useGridState } from '../state/GridState';
import { Button, Container, Result, Subtitle,Title} from '../style/StyledPage';

export const GridPage = () => {

    const { path, collectedLetters, traverseGrid, resetGrid } = useGridState();

  return (
    <Container>
      <Title>Grid Traversal</Title>
      <Button onClick={traverseGrid}>Traverse Grid</Button>
      <Button onClick={resetGrid}>Reset</Button>
      <Subtitle>Collected Letters:</Subtitle>
      <Result>{collectedLetters}</Result>
      <Subtitle>Path as characters:</Subtitle>
      <Result>{path}</Result>
    </Container>
  );
};

