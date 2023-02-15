import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";


export const Home = () => (
<>
<h1 className= "text-danger p-3">Characters</h1>
    <div className ="d-flex overflow-auto">	
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        
    </div>
    <h1 className= "text-danger p-3">Planets</h1>
    <div className ="d-flex overflow-auto">
        <Planets/>
        <Planets/>
        <Planets/>
        <Planets/>
        <Planets/>
        <Planets/>
       
    </div>
    
 </>   



);
