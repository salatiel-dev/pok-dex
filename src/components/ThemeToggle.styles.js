import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 1.5rem;
  }
`;

export const ToggleButton = styled.button.attrs(props => ({
  'aria-label': props.$isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'
}))`
  width: 60px;
  height: 30px;
  background: ${props => props.$isDarkMode ? props.theme.primary : '#ccc'};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  .toggle-circle {
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: ${props => props.$isDarkMode ? '33px' : '3px'};
    transition: left 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
