import styled, { css } from 'styled-components';
import { Container as TextContainer } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${() => css`
    ${TextContainer} {
      font-size: 2rem;
    }

    & > div:nth-child(1) {
      padding-top: 7rem;
    }
  `}
`;
