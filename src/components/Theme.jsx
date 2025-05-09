import { useState } from 'react';



export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
 

  const handleThemeToggle = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.id = newTheme ? '🌙 ' : '☀️';
  };
 

  return (
    <div className="content">
      <button
        onClick={handleThemeToggle}
        className="theme-button"
      >
        {isDarkTheme ? '🌙' : '☀️ '}
      </button>
    </div>
  );
}