import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import Loading from '../components/Loading';
import ThemeToggle from '../components/ThemeToggle';
import {
  DetailContainer,
  PokemonInfo,
  BackButton,
  TypeBadge,
  Section,
  AbilityItem,
  MoveItem,
  Header
} from './PokemonDetail.styles';

const PokemonDetail = () => {
  const { id } = useParams();
  const { getPokemonWithDetails } = usePokemon();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const data = await getPokemonWithDetails(id);
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id, getPokemonWithDetails]);

  if (loading) return <Loading />;
  if (!pokemon) return <div>Pokémon não encontrado</div>;

  return (
    <DetailContainer>
      <Header>
        <Link to="/">
          <BackButton>← Voltar</BackButton>
        </Link>
        <ThemeToggle />
      </Header>

      <PokemonInfo>
        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        <span className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</span>

        <div className="types">
          {pokemon.types.map(type => (
            <TypeBadge key={type} type={type}>
              {type}
            </TypeBadge>
          ))}
        </div>

        {pokemon.stats && (
          <Section>
            <h2>Estatísticas</h2>
            <div className="stats-grid">
              {pokemon.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-name">{stat.stat.name}</span>
                  <div className="stat-bar">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    />
                  </div>
                  <span className="stat-value">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section>
          <h2>Habilidades</h2>
          {pokemon.abilities.map((ability, index) => (
            <AbilityItem key={index}>
              <strong>{ability.name}</strong>
              <p>{ability.description}</p>
            </AbilityItem>
          ))}
        </Section>

        <Section>
          <h2>Movimentos</h2>
          <div className="moves-grid">
            {pokemon.moves.map((move, index) => (
              <MoveItem key={index}>{move}</MoveItem>
            ))}
          </div>
        </Section>
      </PokemonInfo>
    </DetailContainer>
  );
};

export default PokemonDetail;
