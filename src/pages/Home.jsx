import React from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import ThemeToggle from '../components/ThemeToggle';
import Loading from '../components/Loading';
import { usePokemon } from '../hooks/usePokemon';
import { HomeContainer, PokemonGrid, LoadMoreButton, Header } from './Home.styles';

const Pokedex = () => {
  const { pokemons, loading, loadMore } = usePokemon();

  return (
    <HomeContainer>
      <Header>
        <h1>
          <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokédex Logo" />
        </h1>
        <ThemeToggle />
      </Header>

      <PokemonGrid>
        {pokemons.map(pokemon => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </PokemonGrid>

      {loading ? (
        <Loading />
      ) : (
        <LoadMoreButton onClick={loadMore}>
          Carregar mais Pokémon
        </LoadMoreButton>
      )}
    </HomeContainer>
  );
};

export default Pokedex;