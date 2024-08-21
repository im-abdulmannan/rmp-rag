"use client";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#c1afd6",
      secondary: "#E9E6DD",
    },
    snuff: {
      50: "#f9f7fb",
      100: "#f3f0f7",
      200: "#e9e3f1",
      300: "#d5cae4",
      400: "#c1afd6",
      500: "#aa8fc3",
      600: "#9875b2",
      700: "#87629f",
      800: "#715285",
      900: "#5e446e",
      950: "#3c2c49",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3rem",
    },
    h5: {},
    h6: {},
    p: {
      color: "#2c2c2c",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: theme.palette.snuff[200],
        },
        "::-webkit-scroll-behavior": {
          scrollbarBehavior: "smooth",
        },
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#9fa1ad",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#5b5d6a",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#e7e7ec",
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#001540",
          color: "#E9E6DD",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#001530",
            color: "#fafafa",
          },
          "&:disabled": {
            backgroundColor: "#001540",
            color: "rgba(255,255,255,0.5)",
          },
        },
        text: {
          fontSize: "1rem",
          fontWeight: 500,
          textTransform: "none",
          color: "#e9e6dd",
          "&:hover": {
            color: "#fff",
            backgroundColor: "rgba(255,255,255, 0.1)",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#001540",
          border: "1px solid #001540",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#001540",
            color: "#e9e6dd",
            borderColor: "#001530",
          },
        },
      },
    },
  },
});

export default theme;
