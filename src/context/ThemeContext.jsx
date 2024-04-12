import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState } from "react";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#504908", // red
    },
    secondary: {
      main: "#a19a5c", // green
    },
    white: {
      main: "#ffffff", // white
    },
    black: {
      main: "#181818", // black
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1f1c02", // red
    },
    secondary: {
      main: "#645d21", // green
    },
    white: {
      main: "#181818", // white
    },
    black: {
      main: "#ffffff", // black
    },
  },
});

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
