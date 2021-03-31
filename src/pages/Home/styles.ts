import styled from 'styled-components';

export const Container = styled.main`
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100px;
      height: 50px;
    }

    input {
      width: 15rem;
      padding: 0 1.5rem;

      border-radius: 0.25rem;
      border: 0;
      background: #FFFFFF;

      height: 3rem;
          
      font-weight: 400;
      font-size: 1.5rem;
      text-align: center;
      &::placeholder {
        font-size: 1rem;
      }
    }

    button {
        font-size: 1rem;
        color: #FFFFFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const ContainerCard = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 89vh;
`;

export const Card = styled.article`
  background-color: white;
  width: 326px;
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  transition: all .5s;

  &:hover {
    -webkit-filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    -webkit-transform: rotateZ(-360deg) scale(1.2);
    transform: rotateZ(360deg) scale(1.2);
  }
`

export const Header = styled.img`
  width: 100%;
  height: 150px;
  display: block;
`

export const CardBody = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.383);

  img {
    width: 180px;
    height: 180px;
    border: 0.15rem solid #8B0000;
    border-radius: 50%;
    margin-top: -90px;
    margin-bottom: 1rem;
    background-color: white;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0.15rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--dark-gray);
    font-size: 1.6rem;
    margin-top: 0.15rem;
    margin-bottom: 0.5rem;
  }
`

export const CardFooter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;

  div {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    p {
      letter-spacing: 1px;
    }
  }
`