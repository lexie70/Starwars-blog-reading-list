import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store,actions}= useContext(Context)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
				<Link to="/">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="star wars logo"  className="img-fluid" style={{width: "100px", height: "100px"}}/>
				</Link>
			
			<div className="ml-auto">
				
				<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">

    <li><button className="dropdown-item" type="button">Action</button></li>
    
  </ul>
</div>
</div>
				
		
		</nav>
	);
};
