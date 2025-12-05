import styled from 'styled-components';

export const DetailContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto 30px;
  padding: 20px 0;

  a {
    text-decoration: none;
  }
`;

export const BackButton = styled.button`
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: white;
    transform: translateX(-5px);
  }
`;

export const PokemonInfo = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: ${props => props.theme.text};
    text-transform: capitalize;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .pokemon-id {
    color: ${props => props.theme.textSecondary};
    font-size: 1.2rem;
    margin-bottom: 20px;
    display: block;
  }

  .pokemon-image {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: block;
  }
`;

export const TypeBadge = styled.span`
  background: ${props => getTypeColor(props.type)};
  color: white;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 10px;
`;

export const Section = styled.section`
  margin-top: 30px;

  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .stats-grid {
    display: grid;
    gap: 10px;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 10px;

    .stat-name {
      color: ${props => props.theme.textSecondary};
      min-width: 150px;
      text-transform: capitalize;
    }

    .stat-bar {
      flex: 1;
      height: 20px;
      background: ${props => props.theme.background};
      border-radius: 10px;
      overflow: hidden;

      .stat-fill {
        height: 100%;
        background: ${props => props.theme.primary};
        transition: width 0.3s ease;
      }
    }

    .stat-value {
      color: ${props => props.theme.text};
      font-weight: 600;
      min-width: 40px;
      text-align: right;
    }
  }
`;

export const AbilityItem = styled.div`
  background: ${props => props.theme.background};
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: ${props => props.theme.text};
  text-transform: capitalize;
`;

export const MoveItem = styled(AbilityItem)`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
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
