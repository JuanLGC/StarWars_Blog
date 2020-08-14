import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Header = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="header navbar navbar-dark d-flex justifiy-content-between">
			<img
				className="sw-logo ml-3"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
			/>
			<img className="col-1" src="https://pngimg.com/uploads/darth_vader/darth_vader_PNG6.png" />
			<Dropdown className="mr-4">
				<Dropdown.Toggle className="btn-fav" variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu className="drop_menu ">
					{store.favoriteItem.map((item, index) => {
						return (
							<Dropdown.Item
								key={index}
								className="text-warning d-flex justify-content-between pt-2"
								href="#/action-1">
								<p>{item}</p>{" "}
								<i
									key={index}
									className="fa fa-trash pt-1"
									onClick={() => {
										console.log(favoriteItem);
									}}
								/>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
