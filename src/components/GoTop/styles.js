import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    color: #fff;
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 4;
    opacity: 0.85;
  `}
`;
