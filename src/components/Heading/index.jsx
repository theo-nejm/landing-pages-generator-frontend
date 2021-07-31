import P from 'prop-types';
import { Title } from './styles';

export function Heading({
  children,
  colorDark = true,
  as = 'h1',
  size = 'xhuge',
  upperCase = false,
}) {
  return (
    <Title colorDark={colorDark} as={as} size={size} upperCase={upperCase}>
      {children}
    </Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'huge',
    'xhuge',
  ]),
  upperCase: P.bool,
};
