import * as React from "react";
import ListPanier from "../componant/ListPanier";
import StepperPanier from "../componant/Stepper";

function Panier() {
  return (
    <div>
      <StepperPanier />

      <ListPanier />
    </div>
  );
}

export default Panier;
