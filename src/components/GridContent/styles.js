import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    text-align: center;
    max-width: 58rem;
  `}
`;

export const HTMLContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
  `}
`;
