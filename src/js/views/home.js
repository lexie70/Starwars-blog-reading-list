import React from "react";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";


export const Home = () => (
<>
<h1 className= "text-danger p-3">Characters</h1>
    <div className ="d-flex flex-row mb-3">	
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        
    </div>
    <h1 className= "text-danger p-3">Planets</h1>
    <div className ="d-flex flex-row mb-3">
        <Planets/>
        <Planets/>
        <Planets/>
        <Planets/>
       
    </div>
    
 </>   



);
