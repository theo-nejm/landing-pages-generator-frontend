import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render <TextComponent />', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
  });

  it('should have font-size of 2.4rem', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const text = screen.getByText('Children');
    expect(text).toHaveStyle({
      'font-size': '2.4rem',
    });
  });
});
