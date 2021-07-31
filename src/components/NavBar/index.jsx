import P from 'prop-types';
import { Container } from './styles';
import { MenuLink } from '../MenuLink';

export const NavBar = ({ links = [] }) => {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavBar.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
