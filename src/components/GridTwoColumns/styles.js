import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  background: none;
  @media ${theme.media.medium} {
    margin-bottom: ${theme.spacings.medium};
  }
    }
  `}
`;

export const ImageContainer = styled.div`
  > img {
    width: 100%;
  }
`;
