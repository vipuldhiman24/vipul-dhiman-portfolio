import { createTheme } from "@mui/material/styles";

/* -------- DARK (DEFAULT) -------- */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f83ff", // space blue accent
    },
    background: {
      default: "#0b1020", // deep space background
      paper: "#121830",   // card / surface
    },
    text: {
      primary: "#e6e9f0",
      secondary: "#aab0c0",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

/* -------- LIGHT (DAY) -------- */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3a6fd8",
    },
    background: {
      default: "#fbfbf6ff", // soft day background
      paper: "#ffffff",
    },
    text: {
      primary: "#1c1f26",
      secondary: "#5f6675",
    },
  },
  shape: {
    borderRadius: 12,
  },
});
