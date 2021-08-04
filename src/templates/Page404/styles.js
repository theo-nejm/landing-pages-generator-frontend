import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1128;

  > div {
    width: 60rem;
    height: max-content;
    background: #FFF;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 2rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      font-size: 8rem;

      i {
        color: #dc143c;
        font-style: normal;
      }
    }

    a {
      height: 3rem;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
}
`;
