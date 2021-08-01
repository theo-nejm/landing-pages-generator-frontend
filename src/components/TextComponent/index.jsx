import P from 'prop-types';
import { Container } from './styles';

export const TextComponent = ({ children }) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
