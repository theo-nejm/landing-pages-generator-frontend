import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: '#FFF',
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xlarge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xhuge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xsmall">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xxlarge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xxlarge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.large,
      {
        media: theme.media.medium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading upperCase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
