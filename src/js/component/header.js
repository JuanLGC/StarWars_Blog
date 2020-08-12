import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Header = () => {
	return (
		<nav className="header navbar navbar-dark d-flex justifiy-content-between">
			<img
				className="sw-logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
			/>
			<img className="col-1" src="https://pngimg.com/uploads/darth_vader/darth_vader_PNG6.png" />
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu className="drop_menu ">
					<Dropdown.Item className="text-warning" href="#/action-1">
						Action
					</Dropdown.Item>
					<Dropdown.Item className="text-warning" href="#/action-2">
						Another action
					</Dropdown.Item>
					<Dropdown.Item className="text-warning" href="#/action-3">
						Something else
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
