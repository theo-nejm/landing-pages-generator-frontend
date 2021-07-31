import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Container bg={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
