import P from 'prop-types';
import { Container } from './styles';

export const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
