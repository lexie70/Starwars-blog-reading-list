import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

function Characters(){
  function getInfo() {
      
  }

    return <> 
    
 <div className="card me-3 card-deck" style={{width: "18rem"}} >
  <img src={rigoImage} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text"> quick example text to build on the card title and make up the bulk of the card's content.</p>
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