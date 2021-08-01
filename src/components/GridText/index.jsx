import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Container, Element, Grid } from './styles';

export const GridText = ({ background, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading as="h2" size="xhuge" upperCase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((grid, index) => (
            <Element key={index}>
              <Heading as="h3" size="medium" colorDark={!background}>
                {grid.title}
              </Heading>
              <TextComponent>{grid.description}</TextComponent>
            </Element>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};

/*
export default {
  background: false,
  title: 'My grid',
  description:
    'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde',
  grid: [
    {
      title: 'Teste 1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
    {
      title: 'Teste 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
    {
      title: 'Teste 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
  ],
}; */
