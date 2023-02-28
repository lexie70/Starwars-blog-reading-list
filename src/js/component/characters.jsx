import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


function Characters(props){
  const { store, actions } = useContext(Context);


  useEffect(() => {
    actions.loadSomeData();
  }, []);

  return <div  style={{ display: 'flex', justifyContent: 'center' }}> 
 <div   className="card me-2 card-deck "  style={{width: 15 + "rem",lengh: 15 + "rem"}} >
  <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">{props.nombre}</h5>
     <p className="card-text"></p>
     <Link to="/Information">
					<button className="btn btn-primary me-5">Learn more! </button>
			</Link>
      <button type="button" className="btn btn-outline-warning float-end" onClick={()=>actions.addFavorite(props.nombre)} ><i className="fas fa-heart"></i></button>
      
					
			
  </div>
</div>

</div>
}
 

 export default Characters