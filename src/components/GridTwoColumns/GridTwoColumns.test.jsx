import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/renderTheme';
import GTCmock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render <GridTwoColumns />', () => {
    const { container } = renderTheme(<GridTwoColumns {...GTCmock} />);
    expect(container).toMatchSnapshot();
  });
});
