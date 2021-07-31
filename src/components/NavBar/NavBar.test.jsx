import { screen } from '@testing-library/dom';
import { NavBar } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<NavBar />', () => {
  it('should render <NavBar />', () => {
    renderTheme(<NavBar links={mock}>NavBar</NavBar>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
});
