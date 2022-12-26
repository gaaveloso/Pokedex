import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import ModalCard from "../../components/Modal/ModalCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./styled";

const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const {pokedex, setPokedex} = context

  return (
    <>
      <Header />
      <Container>
        <Title>
        <h1>Meus Pokémons</h1>
        </Title>
        <ContainerCard>
        {pokedex.map((pokemon) => {
          return (
            <Card key={pokemon.name} pokemon={pokemon}/>
          )
        })}
        </ContainerCard>
      </Container>
    </>
  );
};

export default PokedexPage;
