import React,{useContext,useEffect}from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

function Planets(){
 const {store,actions}= useContext(Context)

 useEffect(()=>{
actions.loadSomePlanets();
 },[])


    return(
       <>
   {/* //  <div className="d-flex overflow-auto"> */}
       {store.planets.map((item,index)=>{
         return (
        
      <div key={index} className="me-1 ms-1" style={{width: 18 + "rem"}}>
         <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
             <Link to="/information">
              <button className="btn btn-primary float-start">Learn more! </button>
             </Link>
             <Link to="/demo">
              <button type="button" className="btn btn-outline-warning float-end"><i className="fas fa-heart"></i></button>
             </Link>
         </div>
      </div>)
            })} 
              


 
              </>
// {/* </div> */}
)
}
 

 export default Planets