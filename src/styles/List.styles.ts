import styled from 'styled-components';

export const Wrapper = styled.div`
  .list__item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin: 2rem 0;
  }
  .list__title {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin-top: 2rem;
    p {
      margin: 0 3rem;
      color: gray;
    }
  }
`;
