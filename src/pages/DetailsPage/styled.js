import styled from "styled-components";
import pokebola from "../../img/pokebola-background.png";

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: #5e5e5e;
  h1 {
    color: white;
    font-size: 3rem;
    margin-left: 5vw;
    padding-top: 5vh;
    margin-bottom: 5vh;
  }
`;

export const CardDetails = styled.div`
  width: 80vw;
  height: 70vh;
  margin: 0 auto;
  background-color: ${(props) => props.color};
  border-radius: 37.8857px;
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 1% top 50px;
  display: flex;
`;

export const ContainerLeft = styled.div`
  display: flex;
`;

export const ImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 5vw;
  margin-bottom: 5vh;
  margin-top: 5vh;

  img {
    border-radius: 8px;
    background-color: white;
    width: 274px;
    height: 274px;
  }
`;

export const BaseStats = styled.div`
  background-color: white;
  width: 343px;
  height: auto;
  border-radius: 8px;
  margin-left: 2vw;
  margin-bottom: 5vh;
  margin-top: 5vh;

  h2 {
    color: black;
    margin: 30px 0px 0px 25px;
    font-size: 2rem;
  }
`;

export const DivStats = styled.div`
  display: flex;
  margin-left: 2vw;
  margin-top: 2vh;
  gap: 30px;

  h3 {
    border-bottom: 1px solid black;
    margin-top: 10px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
`;

export const DivInfos = styled.div`
  margin-top: 2vh;
  margin-left: 5vw;
`;

export const DivMoves = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 15.5vw;
  height: 45vh;
  margin-top: 4vh;

  h2 {
    margin-left: 20px;
    margin-top: 20px;
  }

  h3 {
    margin-left: 2vw;
    margin-top: 2vh;
    background: #ececec;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivType = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const DivTypes = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImgPokemon = styled.img`
  width: 250px;
  height: 250px;
  position: relative;
  right: 236px;
  left: 11px;
  bottom: 70px;
`;