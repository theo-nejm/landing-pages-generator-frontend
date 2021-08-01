import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Container, HTMLContainer } from './styles';

export const GridContent = ({ title, html, background }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading as="h2" upperCase colorDark={!background}>
          {title}
        </Heading>
        <HTMLContainer>
          <TextComponent>{html}</TextComponent>
        </HTMLContainer>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  children: P.node.isRequired,
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.node.isRequired,
  background: P.bool,
};
