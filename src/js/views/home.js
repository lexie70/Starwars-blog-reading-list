import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";


export const Home = () => {

    const {store,actions}=useContext(Context);
    // console.log(store.characters)

    useEffect(()=>{
      actions.loadSomeData()
    },[])

    return (
      <>
      <button onClick={()=>console.log(store.characters)}>traer characters</button>
        <h1 className= "text-danger p-3">Characters</h1>
        <div className ="d-flex overflow-auto">	
           {store.characters.map((item,index)=>(
            <Characters hola={item.name} casita={'ventana'}  key={index} className="me-3 ms-3"/>
           
           ))}   
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
}