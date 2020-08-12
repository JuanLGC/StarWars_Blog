import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="category-navbar navbar navbar-expand navbar-light">
			<a className="navbar-brand" href="#">
				<i className="ml-2 fab fa-galactic-republic " />
			</a>

			<div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
				<ul className="navbar-nav pr-5">
					<li className="nav-item px-4">
						<a className="nav-link" href="#">
							CHARACTERS
						</a>
					</li>
					<li className="nav-item px-4">
						<a className="nav-link" href="#">
							PLANETS
						</a>
					</li>
					<li className="nav-item px-4">
						<a className="nav-link" href="#">
							VEHICLES
						</a>
					</li>
				</ul>
			</div>
			<a className="navbar-brand " href="#">
				<i className="ml-2 fab fa-jedi-order " />
			</a>
		</nav>
	);
}
