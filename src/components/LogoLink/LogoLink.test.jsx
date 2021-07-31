import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#" text="MyLogo" />);
    const heading = screen.getByRole('heading', { name: 'MyLogo' });
    expect(heading.firstChild).toHaveAttribute('href', '#');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#" text="MyLogo" srcImg="http://image" />);
    const logo = screen.getByRole('heading', { name: 'MyLogo' });
    expect(logo.firstChild).toHaveAttribute('href', '#');
    expect(logo.firstChild.firstChild).toHaveAttribute('src', 'http://image');
    expect(logo.firstChild.firstChild).toHaveAttribute('alt', 'MyLogo');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#" text="MyLogo" srcImg="http://image" />,
    );
    screen.getByRole('heading', { name: 'MyLogo' });
    expect(container).toMatchSnapshot();
  });
});
