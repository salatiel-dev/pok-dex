import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding: 20px 0;

  h1 {
    color: ${props => props.theme.text};
    font-size: 2.5rem;
    margin: 0;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  a {
    text-decoration: none;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 12px 32px;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
