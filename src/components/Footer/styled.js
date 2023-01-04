import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100vw;
  color: white;
  background-color: #A9A9A9;
  img {
    width: 200px;
    height: 200px;
  }
  
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 80%;
  img {
    width: 50px;
    height: 50px;
    @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    }
  }
  a {
    img {
      transition: all 0.5s;
    }
    img:hover {
      width: 60px;
      height: 60px;
    }
  }
  div {
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 40px;
    @media (max-width: 800px) {
      padding: 0px;
  }
  }
  h1 {
    font-size: 23px;
  }
`;