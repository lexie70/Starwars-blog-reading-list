import React,{useEffect,useState,useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useParams, Link } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";



export const Information = () => {
  const params = useParams()
  console.log(params);
  const [personaje,setPersonaje]= useState([])
  const characterUrl = 'https://www.swapi.tech/api/people/'+params.theid;
  const imgUrl = "https://starwars-visualguide.com/assets/img/characters";
   const { store, actions } = useContext(Context);
  
   useEffect(() => {
    fetch(characterUrl)
    .then(res => res.json())
    .then(data => setPersonaje(data.results))
    .catch(err => err);
    console.log(personaje)
  },[])
  

return (<>
 <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={rigoImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
 </>)
}
