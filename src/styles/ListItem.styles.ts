import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  div {
    background-color: black;
    position: relative;
    width: 350px;
    height: 250px;
    margin: 0.3rem;
    border-radius: 10px;

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
