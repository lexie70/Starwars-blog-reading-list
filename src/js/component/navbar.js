import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
				<Link to="/">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="star wars logo"  className="img-fluid" style={{width: "100px", height: "100px"}}/>
				</Link>
			
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">favorites </button>
				</Link>
			</div>
		</nav>
	);
};
