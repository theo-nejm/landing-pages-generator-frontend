import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Container, ImageContainer, TextContainer } from './styles';

export const GridTwoColumns = ({ title, text, background = false, srcImg }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background}>
        <TextContainer>
          <Heading as="h2" upperCase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <img src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
};
