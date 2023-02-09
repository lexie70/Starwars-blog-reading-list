import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Characters(){
    return <>
    <div className="card me-3" style={{width: "18rem"}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text"> quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary me-5">Learn more!</a>
    <button type="button" class="btn btn-outline-warning ">button</button>
  </div>
</div>
</>
}
 

 export default Characters