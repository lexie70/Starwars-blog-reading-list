import React,{useContext,useEffect, useState}from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


 export const InfoPlanets= ()=>{
   const {store,actions} = useContext(Context);
   const {userId} = useParams();
   const [planeta, setPlaneta] = useState([]);
  //  console.log(userId);

   useEffect(()=>{
   actions.getIdPlanets(userId);

   },[]);
  

    return (
    <>
    {/* <button onClick={()=> console.log(store.planetsId)}>planetas</button> */}
        <div className="card mb-3" >
         <div className="row g-0">
           <div className="col-md-4">
             <img src={`https://starwars-visualguide.com/assets/img/planets/${userId}.jpg`} className="img-fluid rounded-start" alt="..."/>
           </div>
           <div className="col-md-8">
             <div className="card-body">
               <h1 className="card-title">{store.planetsId.name}</h1>
               <h5 className="card-text">Diameter: {store.planetsId.diameter} </h5>
               <h5 className="card-text">Population: {store.planetsId.population}</h5>
               <h5 className="card-text">Terrain: {store.planetsId.terrain}</h5>
               <h5 className="card-text">Orbital Period: {store.planetsId.orbital_period}</h5>
               <h5 className="card-text">Gravity: {store.planetsId.gravity}</h5>
               <h5 className="card-text">Climate: {store.planetsId.climate}</h5>
               
               
             </div>
           </div>
         </div>
       </div>
        </>
    )
        
    

}

