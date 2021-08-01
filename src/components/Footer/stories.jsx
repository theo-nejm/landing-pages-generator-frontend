import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: '<i>Made with <3 by <b>Theo Nejm.</b></i>',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
