import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: '#FFF',
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">Text</Heading>
      </ThemeProvider>,
    );
    const headingBig = screen.getByRole('heading', { name: 'Text' });
    expect(headingBig).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Text</Heading>
      </ThemeProvider>,
    );
    const headingMedium = screen.getByRole('heading', { name: 'Text' });
    expect(headingMedium).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading upperCase>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with as h6', () => {
    const { container } = renderTheme(<Heading as="h6">Text</Heading>);
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
