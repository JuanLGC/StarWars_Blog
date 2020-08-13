import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cards } from "./cards";
import { Context } from "../store/appContext";

export function InfoSection() {
	const { store, actions } = useContext(Context);
	return (
		<div className="section-container">
			<h1 className="category-titles">Characters</h1>
			<section className="card-box">
				{store.people.map((element, index) => {
					return <Cards key={index} name={element} birthyear={element} charGender={element} />;
				})}
			</section>
		</div>
	);
}
