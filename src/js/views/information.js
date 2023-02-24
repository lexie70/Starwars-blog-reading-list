import React,{useEffect,useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useParams } from "react-router";



export const Information = () => {
  const params = useParams()
  console.log(params);
  const [personaje,setPersonaje]= useState([])

  useEffect(()=>{
    fetch("https://www.swapi.tech/api/people/"+params.id)
		.then((response) => response.json())
		.then((data) =>console.log(data.result.properties))

  },[])
  console.log(personaje);

return <>
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
 </>
}
