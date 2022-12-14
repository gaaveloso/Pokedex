import React from "react";
import { useLocation, useNavigate } from "react-router";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { ButtonDelet, ButtonPokedex, ButtonPokemon, Container } from "./styled";
import logo from "../../img/pokemon-logo.png";
const Header = () => {
  // hook pra saber nosso path atual
  const location = useLocation();

  // hook pra navegar as paginas
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <ButtonPokedex>
              <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
            </ButtonPokedex>
          </Container>
        );
      case "/pokedex":
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </button>
            </ButtonPokemon>
            <img src={logo} />
          </Container>
        );
      case "/detail":
        return (
          <Container>
            <ButtonPokemon>
              <button onClick={() => goToHomePage(navigate)}>
                Todos Pokémons
              </button>
            </ButtonPokemon>
            <img src={logo} />
            <ButtonDelet>
              <button>Excluir da Pokédex</button>
            </ButtonDelet>
          </Container>
        );
    }
  };
  return <Container>{renderHeader()}</Container>;
};

export default Header;
