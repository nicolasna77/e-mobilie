import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import Login  from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from "@mui/material/Link";
import PrimarySearchAppBar  from './componant/appBar';
import Footer  from './componant/Footer';
import Breadcrumb from "./componant/Breadcrumb";






const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#a2a2a2',
          contrastText: 'rgba(49,49,49,0.87)',
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
                <Route  path="/Login" element={<Login/>} />
               
           </Routes>
    
     
   
</Router>  
<Footer/>


</ThemeProvider>


  );
}

export default App;
