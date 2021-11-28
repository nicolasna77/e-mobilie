import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import Login  from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PrimarySearchAppBar  from './componant/appBar';
import Footer  from './componant/Footer';


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#efefef',
        },
        secondary: {
          main: '#9c1019',
        },
        text: {
          secondary: 'rgba(255,255,255,0.7)',
        },
        background: {
          default: '#f7f7f7',
          paper: '#ffffff',
        },
      },
  });

function App() {

  return (
    <ThemeProvider theme={theme}>
<Router>
<PrimarySearchAppBar/>
       
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
