import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { goToDetailsPage } from '../../routes/coordinator'
import { Container, Link, Pokemon, Type } from './styled'

const Card = (props) => {

  const { pokemonUrl, name } = props
  const navigate = useNavigate();

  const fetchPokeDetails = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      console.log(response.data.id);
    } catch (error) {
      console.log("Erro ao buscar detalhes de pokemon");
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokeDetails();
  }, []);

  return (
    <Container>
    <Pokemon>
        <div>
            <p>#01</p>
            <h1>{name}</h1>
        <Type>
            <p>Poison</p>
            <p>Grass</p>
        </Type>
        </div>
        <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}/>
    </Pokemon>
    <Link>
        <a onClick={() => goToDetailsPage(navigate)}><p>Detalhes</p></a>
        <button>Capturar!</button>
    </Link>
    </Container>
  )
}

export default Card