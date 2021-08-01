import { fireEvent, screen } from '@testing-library/dom';
import { Menu } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import linksMock from '../NavBar/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};
describe('<Menu />', () => {
  it('should render <Menu />', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render mobile menu and o/c buttons', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.medium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should render o/c buttons properly', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');

    fireEvent.click(button);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
  });

  it('should close menu when click on container', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    fireEvent.click(button);
    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });
  });

  it('should not render links when no links were passed as props', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
