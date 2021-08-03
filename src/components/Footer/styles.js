import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    p,
    a,
    i,
    b {
      font-size: ${theme.fonts.sizes.xxsmall};
      text-align: center;
    }
  `}
`;
