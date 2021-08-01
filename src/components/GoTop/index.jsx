import { Container } from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Voltar para o topo" title="Go back to top">
      <KeyboardArrowUp />
    </Container>
  );
};
