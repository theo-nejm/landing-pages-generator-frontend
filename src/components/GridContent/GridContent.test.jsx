import { GridContent } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render <GridContent />', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render with correct background color', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={false} />,
    );
    expect(container.firstChild).toHaveStyle('background-color: #FFF');
  });
});
