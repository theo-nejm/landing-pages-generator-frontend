import { Container } from './styles';

export const Page404 = () => {
  return (
    <Container>
      <div>
        <h1>
          <span>
            4<i>0</i>4
          </span>{' '}
          <br />
          Desculpe, não foi possível encontrar a página.
        </h1>

        <a href="/">Voltar para a superfície</a>
      </div>
    </Container>
  );
};
