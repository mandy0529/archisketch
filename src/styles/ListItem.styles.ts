import styled from 'styled-components';

export const Wrapper = styled.div`
  div {
    background-color: black;
    position: relative;
    width: 350px;
    height: 250px;
    margin: 0.3rem;
    border-radius: 10px;
    .delete-btn {
      z-index: 2000;
      position: absolute;
      top: 5%;
      right: 3%;
      color: white;
      font-size: 1.3rem;
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        color: tomato;
        transform: scale(1.1);
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      transition: all 0.3s linear;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
`;
