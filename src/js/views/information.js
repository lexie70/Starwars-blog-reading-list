import React,{useEffect,useState,useContext} from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import { useParams, Link } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";



export const Information = () => {
  const {userId} = useParams()
  // console.log(userId); aca estabamos verificando el contenido de userId
  const [personaje,setPersonaje]= useState([])
   useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${userId}`)
    .then(res => res.json())
    .then(data => (setPersonaje(data.result.properties)))
  
  },[])
  

return (<>
{/* <button onClick={()=>console.log(personaje)}>personaje</button> */}
 <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${userId}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{personaje.name}</h1>
        <h5 className="card-text">Gender: {personaje.gender}</h5>
        <h5 className="card-text">Height: {personaje.height}</h5>
        <h5 className="card-text">Mass: {personaje.mass} </h5>
        <h5 className="card-text">Skin color: {personaje.skin_color}</h5>
        <h5 className="card-text">Eye color: {personaje.eye_color}</h5>
        <h5 className="card-text">Birth year: {personaje.birth_year}</h5>
        
      </div>
    </div>
  </div>
</div>
 </>)
}
