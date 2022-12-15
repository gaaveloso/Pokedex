import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container } from "./styled";

const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const {pokedex, setPokedex} = context

  return (
    <>
      <Header />
      <Container>
        <h1>Meus Pokémons</h1>
        {pokedex.map((pokemon) => {
          return (
            <Card key={pokemon.name} />
          )
        })}
      </Container>
    </>
  );
};

export default PokedexPage;
