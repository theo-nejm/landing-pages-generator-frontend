import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 4rem 0;
    width: 80vw;

    h2 {
      font-size: 4.2rem;
    }

    ${TextComponent} {
      margin-bottom: ${theme.spacings.huge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Element = styled.div`
  ${() => css`
    overflow: hidden;

    > img {
      width: 100%;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
    }
  `}
`;
