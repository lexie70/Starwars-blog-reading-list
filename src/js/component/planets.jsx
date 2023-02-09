import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

function Planets(){
    return <> 
 <div className="card me-3" style={{width: "18rem"}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text"> quick example text to build on the card title and make up the bulk of the card's content.</p>
     <Link to="/demo">
					<button className="btn btn-primary">Learn more! </button>
				</Link>
     <button type="button" className="btn btn-outline-warning ">button</button>
  </div>
</div>

</>
}
 

 export default Planets