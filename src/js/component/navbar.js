import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store,actions}= useContext(Context);

	
	return (
	 <nav className="navbar navbar-light bg-light mb-3" width= "30%">
		
		<Link to="/">
		 <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="star wars logo"  className="img-fluid" style={{width: "100px", height: "100px"}}/>
		</Link>
			
		<div className="ml-auto">
				
		  <div className="dropdown me-5">
		  <button className="btn btn-secondary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
			<ul className="dropdown-menu">
              {store.favorites.map((item,index)=>{
                return (
					<li key={index}><button className="dropdown-item" type="button" >{item}<span className=" bg-secondary p-1 float-sm-end" onClick={()=>{actions.delete(item);}}>X</span></button></li>
					)
				}
				)}
          </ul>
        </div>
       </div>
				
		
  </nav>
	);
				

	   
			



};
