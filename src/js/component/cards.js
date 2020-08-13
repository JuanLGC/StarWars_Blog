import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FavoriteButton } from "./favoriteButton";

export function Cards(props) {
	return (
		<div className="card-item">
			<img
				className="card-img-top"
				src="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name.name}</h5>
				<p className="card-text mt-3">
					- Birth: {props.birthyear.birth_year}
					<br />- Gender: {props.charGender.gender}
				</p>
				<div className="d-flex justify-content-between">
					<Link href="#" className="btn btn-warning">
						Learn More
					</Link>
					<FavoriteButton />
				</div>
			</div>
		</div>
	);
}

Cards.propTypes = {
	name: PropTypes.string,
	birthyear: PropTypes.string,
	charGender: PropTypes.string
};
