import React from "react";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";


export const Home = () => (
<>
<h1>Characters</h1>
    <div className ="d-flex flex-row mb-3">	
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
    </div>
    
 </>   



);
