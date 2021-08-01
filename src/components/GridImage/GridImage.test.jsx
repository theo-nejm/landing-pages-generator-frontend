import { renderTheme } from '../../styles/renderTheme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render <GridImage /> with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render <GridImage /> w/o background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
