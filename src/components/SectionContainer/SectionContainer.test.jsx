import { SectionContainer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionContainer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionContainer>Hello, world!</SectionContainer>,
    );
    expect(container).toMatchSnapshot();
  });
});
