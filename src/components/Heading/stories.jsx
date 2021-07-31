import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Any',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'O texto está escuro',
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
