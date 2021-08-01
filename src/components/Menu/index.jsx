import { useState } from 'react';
import P from 'prop-types';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as MenuClose } from '@styled-icons/material-outlined/Close';
import { Container, MenuContainer } from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavBar } from '../NavBar';
import { Button } from './styles';

export const Menu = ({ links = [], logoData }) => {
  const [isOpened, setIsOpened] = useState(false);

  function toggleMenuOpened() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <Button onClick={toggleMenuOpened} aria-label="Open/Close menu">
        {isOpened ? (
          <MenuClose aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container isOpened={isOpened} onClick={toggleMenuOpened}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavBar links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
