import react from "react";
import './App.css';
import PrimarySearchAppBar from './componant/appBar';
import CardPiece from './componant/CardPiece';
import CardPop from './componant/CardPop';
import Header from './componant/header'


function App() {
  return (
    <div>
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </div>
      <div className="cardPiece">
        <CardPiece/>
      </div>

      <div className="cardPop">
        <CardPop/>
      </div>

      <div>
        <Header></Header>
      </div>
    </div>



  );
}

export default App;
