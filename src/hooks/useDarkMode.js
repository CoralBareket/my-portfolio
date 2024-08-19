import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'Light' ? true : false; // Default to light mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [isDarkMode, toggleMode];
}

export default useDarkMode;
