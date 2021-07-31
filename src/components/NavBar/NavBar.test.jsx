import { screen } from '@testing-library/dom';
import { NavBar } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

import mock from './mock';

describe('<NavBar />', () => {
  it('should render links', () => {
    renderTheme(<NavBar links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it("should'nt render links", () => {
    renderTheme(<NavBar />);
    expect(screen.queryAllByText('links')).toHaveLength(0);
  });

  it('should break the layout to responsivity when mobile', () => {
    renderTheme(<NavBar links={mock} />);
    expect(
      screen.getByRole('link', { name: /Link 5/i }).parentElement,
    ).toHaveStyleRule('flex-flow', 'column nowrap', {
      media: theme.media.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavBar links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
