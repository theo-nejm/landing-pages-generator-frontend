import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">MenuLink</MenuLink>);
    expect(screen.getByRole('link', { name: 'MenuLink' })).toBeInTheDocument();
  });

  it('should render a link with target _self', () => {
    renderTheme(<MenuLink link="http://localhost">MenuLink</MenuLink>);
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a link with target _blank', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        MenuLink
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        MenuLink
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0a1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 25%;
        height: 1px;
        width: 50%;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover::after {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      <a
        class="c0"
        href="http://localhost"
        target="_blank"
      >
        MenuLink
      </a>
    `);
  });
});
