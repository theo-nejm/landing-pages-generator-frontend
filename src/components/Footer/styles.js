import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    p,
    a {
      font-size: ${theme.fonts.sizes.small};
      text-align: center;
    }
  `}
`;
