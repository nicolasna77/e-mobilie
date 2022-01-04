import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "./componant/appBar";
import Footer from "./componant/Footer";
import Breadcrumb from "./componant/Breadcrumb";
import Inscription from "./pages/Inscription";
import Produit from "./pages/Produit";
import Profil from "./pages/Profil";
import Nunito from "../src/font/Nunito-Italic-VariableFont_wght.ttf";
import Produits from "./pages/Produits";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, roboto",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Nunito'), local('Nunito-Regular'), url(${Nunito}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#9c1019",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#9c1019",
    },
    text: {
      secondary: "rgba(20,20,20,0.7)",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PrimarySearchAppBar />

        <Breadcrumb />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Produit" element={<Produit />} />
          <Route path="/Connection" element={<Login />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Produits" element={<Produits />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
