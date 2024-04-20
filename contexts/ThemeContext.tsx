import React, { createContext, useState, useContext, ReactNode } from 'react';

type ThemeState = {
  mode: 'dark' | 'light';
};

type ThemeContextType = {
  theme: ThemeState;
  updateTheme: (newTheme?: ThemeState) => void;
};

const defaultState: ThemeContextType = {
  theme: { mode: 'dark' },
  updateTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeState>({ mode: 'dark' });

  const updateTheme = (newTheme?: ThemeState) => {
    if (!newTheme) {
      setTheme({ mode: theme.mode === 'dark' ? 'light' : 'dark' });
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
