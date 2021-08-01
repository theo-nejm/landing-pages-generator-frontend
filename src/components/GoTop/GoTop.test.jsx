import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<GoTop />', () => {
  it('should render <GoTop />', () => {
    renderTheme(<GoTop />);
    expect(
      screen.getByRole('link', { name: 'Voltar para o topo' }),
    ).toHaveAttribute('href', '#');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchSnapshot();
  });
});
