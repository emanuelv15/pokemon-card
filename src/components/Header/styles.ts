import styled from "styled-components";

export const Container = styled.main`
  border-bottom: 1px solid black;
`;

export const Content = styled.div`
  max-width: 100%;
  height: 50px;
  margin: 10px 10% 10px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 50px;
  }
`;
