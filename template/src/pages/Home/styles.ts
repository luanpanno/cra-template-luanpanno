import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;
  width: 100vw;
  background-color: #1a2438;

  p {
    font-size: 2.4rem;
    font-weight: bold;
    color: white;
  }

  span {
    font-size: 1.2rem;
    color: #eaeaea;
  }

  a {
    color: white;
    display: flex;
    align-items: center;

    img {
      height: 24px;
      width: 24px;
      filter: invert(1);
    }
  }
`;
