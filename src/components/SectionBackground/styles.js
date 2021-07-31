import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, bg }) => css`
    background: ${bg ? theme.colors.primaryColor : '#FFF'};
    color: ${bg ? '#FFF' : theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
