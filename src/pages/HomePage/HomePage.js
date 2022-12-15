import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./styled";

const HomePage = () => {

  const context = useContext(GlobalContext)

  const {pokelist, setPokelist, fetchPokelist} = context

  const filterPokemon = (pokeName) => {
    const pokeFilter = pokelist.filter((pokemon) => pokemon.name !== pokeName)
    setPokelist(pokeFilter)
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Todos Pokémons</h1>
        </Title>
        <ContainerCard>
          {pokelist.map((pokemon) => {
            return <Card key={pokemon.name} pokemonUrl={pokemon.url} pokemon={pokemon} filterPokemon={filterPokemon}/>;
          })}
        </ContainerCard>
      </Container>
    </>
  );
};

export default HomePage;
