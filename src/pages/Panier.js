import * as React from 'react';
import Breadcrumb from '../componant/Breadcrumbs';
import ListPanier from '../componant/ListPanier'
import StepperPanier from '../componant/Stepper'



function Panier(){


    return(

<div>


<Breadcrumb />  
<StepperPanier />


<ListPanier />

</div>

    )
}

export default Panier;
