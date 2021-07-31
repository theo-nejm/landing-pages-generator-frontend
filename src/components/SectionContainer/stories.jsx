import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          praesentium veritatis mollitia! Molestiae voluptatibus consequuntur at
          nisi a, in nemo repellat unde quaerat nobis maiores neque magni sint
          temporibus nostrum?
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
