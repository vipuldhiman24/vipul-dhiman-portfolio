
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "./theme";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = mode === "dark" ? darkTheme : lightTheme;
  useEffect(() => {
  document.documentElement.setAttribute("data-theme", mode);
}, [mode]);


  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
