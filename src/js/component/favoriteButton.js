import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function FavoriteButton() {
	const [favoriteState, setFavoriteState] = useState(false);
	const [isFavorite, setIsFavorite] = useState("fa fa-heart white-heart");

	useEffect(
		() => {
			favoriteState ? setIsFavorite("fa fa-heart red-heart") : setIsFavorite("fa fa-heart white-heart");
		},
		[favoriteState]
	);
	return (
		<button type="button" className="btn btn-warning">
			<i
				className={isFavorite}
				onClick={() => {
					setFavoriteState(!favoriteState);
					console.log(favoriteState);
				}}
			/>
		</button>
	);
}
