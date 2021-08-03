import P from 'prop-types';
import { Container, Element, Grid } from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ background = false, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading colorDark={!background} as="h2" upperCase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Grid>
          {grid.map((current, index) => (
            <Element key={index}>
              <img src={current.srcImg} alt={current.altText} />
            </Element>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};
