import P from 'prop-types';
import { TextComponent } from '../TextComponent';
import { Container } from './styles';

export const Footer = ({ children }) => {
  return (
    <Container>
      <TextComponent>{children}</TextComponent>
    </Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};
