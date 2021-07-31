import styled, { css } from 'styled-components';

const titleSize = {
  xsmall: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xsmall};
    `,
  small: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.small};
    `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  large: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.large};
    `,
  xlarge: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xlarge};
    `,
  xxlarge: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xxlarge};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.huge};
      ${mediaFont(theme)};
    `,
  xhuge: (theme) =>
    css`
      font-size: ${theme.fonts.sizes.xhuge};
      ${mediaFont(theme)};
    `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.fonts.sizes.large};
  }
`;

const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, upperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : '#FFF'};
    ${titleSize[size](theme)};
    ${titleCase(upperCase)};
  `}
`;
