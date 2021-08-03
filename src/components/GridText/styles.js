import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 6rem;

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
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Element = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      position: relative;
      left: 5rem;
    }

    ${Heading}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.fonts.sizes.xhuge};
      left: -5rem;
      top: -2rem;
      transform: rotate(7.5deg);
    }
  `}
`;
