import { Base } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { templateMock } from './mock';

describe('<Base />', () => {
  it('should render <Base />', () => {
    const { conatiner } = renderTheme(<Base {...templateMock} />);
    expect(conatiner).toMatchSnapshot();
  });
});
