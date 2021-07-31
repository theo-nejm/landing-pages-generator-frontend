import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';
describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>Hello, world!</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Hello, world!</h1>
      </SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });
});
