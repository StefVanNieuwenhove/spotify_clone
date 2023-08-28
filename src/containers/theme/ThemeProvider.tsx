import { useState, createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return toggleTheme;
};

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const html = document.querySelector('html');
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      html?.classList.add(localTheme);
    } else {
      localStorage.setItem('theme', theme);
      html?.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (): void => {
    const html = document.querySelector('html');
    html?.classList.remove(theme);
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
