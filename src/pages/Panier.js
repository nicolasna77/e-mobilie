import * as React from 'react';
import Breadcrumb from '../componant/Breadcrumbs';
import  PrimarySearchAppBar  from '../componant/appBar';
import ListPanier from '../componant/ListPanier'
import StepperPanier from '../componant/Stepper'
import Footer from '../componant/Footer';




export default function Panier(){


   
return(

<div>
<PrimarySearchAppBar />

<Breadcrumb />  
<StepperPanier />


<ListPanier />




<Footer/>
</div>


)





}