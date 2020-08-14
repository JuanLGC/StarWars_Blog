import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FavoriteButton } from "./favoriteButton";

export function Cards(props) {
	const [mainTitle, setMainTitle] = useState(props.sTitle);

	if (mainTitle == "Characters") {
		return (
			<div className="card-item">
				<img
					className="card-img-top"
					src="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle.name}</h5>
					<p className="card-text mt-3">
						- Birth: {props.birth.birth_year}
						<br />- Gender: {props.charGender.gender}
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between ">
					<a href="#" className=" btn btn-warning ">
						Learn More
					</a>
					<FavoriteButton />
				</div>
			</div>
		);
	} else if (mainTitle == "Planets") {
		return (
			<div className="card-item">
				<img
					className="card-img-top"
					src="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle.name}</h5>
					<p className="card-text mt-3">
						- Climate: {props.planetClimate.climate}
						<br />- Population: {props.planetPopulation.population}
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<a href="#" className=" btn btn-warning  ">
						Learn More
					</a>
					<FavoriteButton />
				</div>
			</div>
		);
	}
}

Cards.propTypes = {
	sTitle: PropTypes.string,
	cardTitle: PropTypes.string,
	birth: PropTypes.string,
	charGender: PropTypes.string,
	planetPopulation: PropTypes.string,
	planetClimate: PropTypes.string
};
