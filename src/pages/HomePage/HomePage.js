import React, { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerCard, Title } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { goToHomeTurnPage } from "../../routes/coordinator";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const context = useContext(GlobalContext);

  const {
    pokelist,
    lastPage,
    perPage,
    setNumbMin,
    setPageNumber,
    pageNumber,
    pokedex,
  } = context;

  const navigate = useNavigate();
  const params = useParams();

  const filteredPokemonlist = () => {
    if (pokelist) {
      return pokelist
        .filter(
          (pokemonInList) =>
            !pokedex.find(
              (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
            )
        )
        .sort((a, b) => {
          if (a.url && b.url) {
            const primeiro = a.url.split("/");
            const segundo = b.url.split("/");
            return Number(primeiro[6]) - Number(segundo[6]);
          } else if (a.url && b.id) {
            const primeiro = a.url.split("/");
            return Number(primeiro[6]) - Number(b.id);
          } else if (a.id && b.url) {
            const segundo = b.url.split("/");
            return Number(a.id) - Number(segundo[6]);
          } else if (a.id && b.id) {
            return Number(a.id) - Number(b.id);
          }
        });
    }
  };

  const handlePageTurn = (value) => {
    if (value === 0) {
      setPageNumber(1);
      setNumbMin(0);
      goToHomeTurnPage(navigate, 1);
    } else if (value === lastPage) {
      setPageNumber(lastPage);
      setNumbMin((lastPage - 1) * perPage);
      goToHomeTurnPage(navigate, lastPage);
    } else {
      setPageNumber(pageNumber + value);
      setNumbMin((pageNumber + value - 1) * perPage);
      goToHomeTurnPage(navigate, pageNumber + value);
    }
  };

  useEffect(() => {
    if (params.page) {
      setNumbMin(Number(params.page) * perPage);
      setPageNumber(Number(params.page));
    }
  }, [params.page, perPage]);

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Todos Pokémons</h1>
        </Title>
        <ContainerCard>
          {filteredPokemonlist()
            .map((pokemon) => {
              return (
                <Card
                  key={pokemon.name}
                  pokemonUrl={pokemon.url}
                  pokemon={pokemon}
                />
              );
            })}
        </ContainerCard>
        <ButtonGroup
          width={"99vw"}
          justifyContent={"center"}
          marginBottom={"15px"}
        >
          {pageNumber !== 1 && (
            <Button onClick={() => handlePageTurn(0)} colorScheme="whiteAlpha">
              Primeira Pagina
            </Button>
          )}
          {pageNumber - 2 > 0 && (
            <Button onClick={() => handlePageTurn(-2)} colorScheme="whiteAlpha">
              {pageNumber - 2}
            </Button>
          )}
          {pageNumber - 1 > 0 && (
            <Button onClick={() => handlePageTurn(-1)} colorScheme="whiteAlpha">
              {pageNumber - 1}
            </Button>
          )}
          <Button colorScheme="blackAlpha">{pageNumber}</Button>
          {pageNumber + 1 < lastPage && (
            <Button onClick={() => handlePageTurn(1)} colorScheme="whiteAlpha">
              {pageNumber + 1}
            </Button>
          )}
          {pageNumber + 2 < lastPage && (
            <Button onClick={() => handlePageTurn(2)} colorScheme="whiteAlpha">
              {pageNumber + 2}
            </Button>
          )}
          {pageNumber !== lastPage && (
            <Button
              onClick={() => handlePageTurn(lastPage)}
              colorScheme="whiteAlpha"
            >
              Ultima Pagina ({lastPage})
            </Button>
          )}
        </ButtonGroup>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
