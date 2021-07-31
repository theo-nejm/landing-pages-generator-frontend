import P from 'prop-types';
import { Container } from './styles';

export const TextComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
