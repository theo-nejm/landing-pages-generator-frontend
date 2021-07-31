import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 25%;
      height: 1px;
      width: 50%;
      transform: scale(0);
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scale(1);
    }
  `}
`;
