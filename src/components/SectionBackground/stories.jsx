import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          praesentium veritatis mollitia! Molestiae voluptatibus consequuntur at
          nisi a, in nemo repellat unde quaerat nobis maiores neque magni sint
          temporibus nostrum?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
