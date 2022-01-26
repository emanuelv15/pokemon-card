import styled from "styled-components";

export const Container = styled.main`
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    flex-direction: row;

    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        input {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border: 1px solid darkgray;
          border-radius: 50%;
          outline: none;
          box-shadow: 0 0 1px 0px red inset;
          margin-bottom: 10px;
          margin-right: 3px;

          &:hover {
            box-shadow: 0 0 2px 0px red inset;
          }

          &:disabled {
            box-shadow: 0 0 0px 0px red inset;
          }

          &:checked {
            background-color: red;
          }
        }
      }

      p {
        font-size: 15px;
        letter-spacing: 1px;
        text-align: center;

        &:nth-child(1n) {
          margin-right: 10px;
        }
      }

      #disabled {
        color: gray;
      }
    }
  }
`;
