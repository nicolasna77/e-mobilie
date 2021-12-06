import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import Login  from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PrimarySearchAppBar  from './componant/appBar';
import Footer  from './componant/Footer';
import Breadcrumb from "./componant/Breadcrumb";
import Inscription from "./pages/Inscription";
import Produit from "./pages/Produit";
import Profil from "./pages/Profil"





const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#9c1019',
          contrastText: '#fafafa',
        },
        secondary: {
          main: '#9c1019',
        },
        text: {
          secondary: 'rgba(20,20,20,0.7)',
        },
        background: {
          default: '#f9f9f9',
          paper: '#ffffff',
        },
      },
  });



function App() {

  return (
    <ThemeProvider theme={theme}>
<Router>
<PrimarySearchAppBar/>

<Breadcrumb />
         <Routes>
                <Route exact path="/" element={<Accueil/>} />
                <Route  path="/Panier" element={<Panier/>} />
                <Route  path="/Produit" element={<Produit/>} />
                <Route  path="/Connection" element={<Login/>} />
                <Route  path="/Inscription" element={<Inscription/>} />
                <Route  path="/Profil" element={<Profil/>} />

           </Routes>
</Router>  
<Footer/>


</ThemeProvider>


  );
}

export default App;
