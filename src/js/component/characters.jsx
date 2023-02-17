import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


function Characters(props){
  const { store, actions } = useContext(Context);


  useEffect(() => {
    actions.loadSomeData();
  }, []);

  return <> 
 <div   className="card me-3 card-deck " style={{width: "18rem"}} >
  <img src={"https://static.wikia.nocookie.net/starwars/images/9/90/LukeLEGENDS.jpg/revision/latest?cb=20160904145136&path-prefix=cs"} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">{props.hola}</h5>
     <p className="card-text"> Gender: {props.casita}<br></br> Hair Color: blond <br></br>Eye-Color: blue </p>
     <Link to="/Information">
					<button className="btn btn-primary me-5">Learn more! </button>
			</Link>
      <Link to="/demo">
					
          <button type="button" className="btn btn-outline-warning float-end"><i className="fas fa-heart"></i></button>
			</Link>
  </div>
</div>

</>
}
 

 export default Characters