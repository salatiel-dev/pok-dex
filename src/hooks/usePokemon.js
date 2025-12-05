import { useState, useEffect, useCallback } from 'react';
import { getPokemons, getPokemonDetail, getAbilityDetail } from '../services/api';

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const loadPokemons = async (reset = false) => {
    if (loading) return;

    setLoading(true);
    try {
      const currentOffset = reset ? 0 : offset;
      const data = await getPokemons(limit, currentOffset);

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const detail = await getPokemonDetail(pokemon.name);
          return {
            id: detail.id,
            name: detail.name,
            image: detail.sprites.other['official-artwork'].front_default,
            types: detail.types.map(t => t.type.name)
          };
        })
      );

      if (reset) {
        setPokemons(detailedPokemons);
        setOffset(limit);
      } else {
        setPokemons(prev => [...prev, ...detailedPokemons]);
        setOffset(prev => prev + limit);
      }
    } catch (error) {
      console.error('Error loading pokemons:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPokemonWithDetails = useCallback(async (idOrName) => {
    try {
      const pokemon = await getPokemonDetail(idOrName);

      // Fetch ability details
      const abilitiesWithDetails = await Promise.all(
        pokemon.abilities.map(async (ability) => {
          const abilityDetail = await getAbilityDetail(ability.ability.url);
          return {
            name: ability.ability.name,
            description: abilityDetail.effect_entries.find(
              entry => entry.language.name === 'en'
            )?.effect || 'No description available'
          };
        })
      );

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'].front_default,
        moves: pokemon.moves.map(move => move.move.name).slice(0, 10),
        abilities: abilitiesWithDetails,
        types: pokemon.types.map(t => t.type.name),
        stats: pokemon.stats,
        height: pokemon.height,
        weight: pokemon.weight
      };
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    loadPokemons(true);
  }, []);

  return {
    pokemons,
    loading,
    loadMore: () => loadPokemons(false),
    refresh: () => loadPokemons(true),
    getPokemonWithDetails
  };
};
