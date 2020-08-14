import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cards } from "./cards";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export function InfoSection(props) {
	const { store, actions } = useContext(Context);
	let [sectionTitle, setSectionTitle] = useState(props.titleSection);

	if (sectionTitle == "Planets") {
		return (
			<div className="section-container">
				<h1 className="category-titles">{sectionTitle}</h1>
				<section className="card-box">
					{store.planets.map((element, index) => {
						return (
							<Cards
								key={index}
								sTitle={sectionTitle}
								cardTitle={element}
								birth={element}
								charGender={element}
								planetClimate={element}
								planetPopulation={element}
							/>
						);
					})}
				</section>
			</div>
		);

		/////////////////////////////////////////////////
	} else if (sectionTitle == "Characters") {
		return (
			<div className="section-container">
				<h1 className="category-titles">{sectionTitle}</h1>
				<section className="card-box">
					{store.people.map((element, index) => {
						return (
							<Cards
								key={index}
								sTitle={sectionTitle}
								cardTitle={element}
								birth={element}
								charGender={element}
								planetClimate={element}
								planetPopulation={element}
							/>
						);
					})}
				</section>
			</div>
		);
	}
}

InfoSection.propTypes = {
	array: PropTypes.string,
	titleSection: PropTypes.string,
	infoChar1: PropTypes.string,
	infoChar2: PropTypes.string
};
