import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import PrimarySearchAppBar  from './componant/appBar';


function App() {

  return (
<Router>
<PrimarySearchAppBar/>
       
            <Routes>
                <Route exact path="/" element={<Accueil/>} ></Route>
                <Route  path="/Panier" element={<Panier/>} />
           </Routes>
        
</Router>


  );
}

export default App;
