import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta atque molestias reprehenderit illo? Odio ipsa vitae tempore libero perspiciatis natus eum molestiae doloremque, repellat porro iusto doloribus, at voluptates ullam?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
