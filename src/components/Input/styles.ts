import styled from "styled-components";

export const Container = styled.main``;

export const ContainerInput = styled.main`
  display: flex;

  input {
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 20px;
    width: 250px;

    &:focus {
      outline: none;
    }
  }
`;

export const Icon = styled.main`
  height: 50px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;

  svg {
    font-size: 35px;
  }

  #clearBtn {
    cursor: pointer;

    &:hover {
      opacity: 0.6;
      transition: 0.3s;
    }
  }
`;

export const ContainerResults = styled.main`
  position: fixed;
  margin-top: 5px;
  width: 330px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: lightgrey;
      cursor: pointer;
    }

    p {
      margin-left: 10px;
    }
  }
`;
