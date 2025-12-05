import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PokemonImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const PokemonName = styled.h3`
  color: ${props => props.theme.text};
  text-transform: capitalize;
  margin: 10px 0 5px;
  font-size: 1.2rem;
`;

const PokemonId = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const TypeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const TypeBadge = styled.span`
  background: ${props => getTypeColor(props.type)};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const getTypeColor = (type) => {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };
  return colors[type] || '#68A090';
};

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <PokemonImage 
        src={pokemon.sprites?.front_default || pokemon.image} 
        alt={pokemon.name}
        loading="lazy"
      />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
      {pokemon.types && pokemon.types.length > 0 && (
        <TypeContainer>
          {pokemon.types.map(type => {
            const typeName = typeof type === 'string' ? type : type.type?.name;
            return (
              <TypeBadge key={typeName} type={typeName}>
                {typeName}
              </TypeBadge>
            );
          })}
        </TypeContainer>
      )}
    </Card>
  );
};

export default PokemonCard;
