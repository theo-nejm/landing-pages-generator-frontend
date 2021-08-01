import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, isOpened }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    transition: all .2s ease-in-out;
    height: 7rem;
    border-bottom: 1px solid ${theme.colors.mediumGray};

    > ${SectionContainer} {
      padding-top: 0;
      padding-botom: 0;
    }

    @media ${theme.media.medium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${isOpened && menuVisible}
    }
  }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;

    @media ${theme.media.medium} {
      display: flex;
      flex-flow: column nowrap;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 100vh;

      img,
      h1 {
        margin-bottom: 2rem;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    background: none;
    border: none;
    color: ${theme.colors.primaryColor};
    display: none;
    @media ${theme.media.medium} {
      display: flex;
    }
  `}
`;
