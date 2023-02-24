import React, { useContext, useEffect,useState } from "react";
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

    return store.loadingCharacter ? (
      <div className="d-flex align-items-center container justify-content-center">
      <h1>Loading...</h1>
    </div>) :(
      <>
      <button onClick={()=>console.log(store.characters)}>traer characters</button>
        <h1 className= "text-danger p-3">Characters</h1>
        <div className ="d-flex overflow-auto">	
           {store.characters.map((item,index)=>(
            <Characters prueba={item.mass} hola={item.name} id ={item.uid}  key={index} className="me-3 ms-3"/>
           
           ))}   
        </div>
        <button onClick={()=>console.log(store.planets)}>traer planets</button>
        <h1 className= "text-danger p-3">Planets</h1>
        <div className =" flex-direction" style={{ display: 'flex', overflowX: 'scroll' }}>
            <div ><Planets/></div>
             
        </div>  
      </>)
    // ) : (<div className="d-flex align-items-center">
    //   <h1 >Loading...</h1>
    //   </div>);
}