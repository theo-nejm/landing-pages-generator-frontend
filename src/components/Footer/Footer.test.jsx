import { Footer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Footer />', () => {
  it('should render <Footer />', () => {
    const { container } = renderTheme(<Footer>Hello, world!</Footer>);
    expect(container).toMatchSnapshot();
  });
});
