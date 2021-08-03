import { Base } from '.';

import { templateMock } from './mock.jsx';

export default {
  title: 'Templates/Base',
  component: Base,
  args: templateMock,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
