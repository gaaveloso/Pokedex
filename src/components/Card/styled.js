import styled from "styled-components";
import pokebola from "../../img/pokebola-background.png";

export const Container = styled.div`

  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-position: right;
  min-width: 22vw;
  min-height: 19vh;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  color: white;
  padding-left: 1.43rem;
  margin-bottom: 1.25rem;
  margin-top: 5vh;
  a {
    cursor: pointer;
    text-decoration: underline;
  }

  div {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;
export const Pokemon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
  gap: 0.62rem;
`;

export const ImgPokemon = styled.img`
  width: 193px;
  height: 193px;
  position: relative;
  right: 236px;
  left: 11px;
  bottom: 70px;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

export const ButtonPokedex = styled.button`
  min-width: 7.6vw;
  height: 3.9vh;
  background-color: #ff6262;
  color: white;
  border-radius: 8px;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
`;

export const ButtonPokemon = styled.button`
  min-width: 7.6vw;
  height: 3.9vh;
  color: black;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
`;

export const CardType = styled.img`
  width: 99px;
  height: 31px;
`;
