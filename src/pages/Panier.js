import * as React from 'react';
import Breadcrumb from '../componant/Breadcrumbs';
import ListPanier from '../componant/ListPanier'
import StepperPanier from '../componant/Stepper'
import Footer from '../componant/Footer';



function Panier(){


    return(

<div>


<Breadcrumb />  
<StepperPanier />


<ListPanier />




<Footer/>
</div>

    )
}

export default Panier;
