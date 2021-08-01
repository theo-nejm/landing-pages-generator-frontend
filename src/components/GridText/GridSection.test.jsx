import { GridText } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<GridText />', () => {
  it('should render <GridText />', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
