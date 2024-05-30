// src/context/theme.js
import React, { createContext, useContext, useEffect } from 'react';

export const ThemeModeContext = createContext({
  themeMode: "light",
  setter: false,
  darkTheme: () => {
    themeMode : "dark"
  },
  lightTheme: () => {
    themeMode: "light"
  },
  
  
});

export const ThemeModeProvider = ({ children, value }) => {
  useEffect(() => {
    console.log(`Setting theme mode: ${value.themeMode}`);
    if (value.themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(document.documentElement.classList); 
  }, [value.themeMode]);

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default function useTheme(){
  return useContext(ThemeModeContext)
}