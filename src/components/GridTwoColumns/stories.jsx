import { GridTwoColumns } from '.';
import GTCmock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: GTCmock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
