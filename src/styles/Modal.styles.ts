import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  .btn-list {
    display: flex;
    justify-content: space-between;
  }
  svg {
    font-size: 1.7rem;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.1);
    }
  }
  .close-btn {
    top: 15%;
    left: 20%;
    background: gray;
    padding: 0.2rem;
    color: white;
    border-radius: 10px;
  }
  .left-btn {
    left: 15%;
    background: #fafafa;
    padding: 0.2rem;
    border-radius: 10px;
    &:hover {
      background: lightgray;
    }
  }
  .right-btn {
    right: 15%;
    background: #fafafa;
    padding: 0.2rem;
    border-radius: 10px;
    &:hover {
      background: lightgray;
    }
  }
  .download-btn {
    right: 13%;
    top: 20%;
    &:hover {
      color: gray;
    }
  }
  .delete-btn {
    right: 16%;
    top: 20%;
    &:hover {
      color: tomato;
    }
  }
  img {
    width: 1000px;
    border-radius: 10px;
  }
`;
