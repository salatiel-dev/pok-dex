import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ToggleButton, ToggleContainer } from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <span>{isDarkMode ? "🌙" : "☀️"}</span>
      <ToggleButton onClick={toggleTheme} $isDarkMode={isDarkMode}>
        <div className="toggle-circle" />
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
