import React, { useContext, useEffect, useState } from "react";
var nextPlanet = "https://swapi.dev/api/planets/?page=1";
var nextPeople = "https://swapi.dev/api/people/?page=1";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: []
		},
		actions: {
			getCharacters: async () => {
				let peopleStored = [];
				for (let i = 0; i < 9; i++) {
					let response = await fetch(nextPeople);
					let responseAsJson = await response.json();
					responseAsJson.results.map(element => {
						peopleStored.push(element);
					});
					setStore({ people: peopleStored });
					if (responseAsJson.next != null) {
						nextPeople = responseAsJson.next.replace("http:", "https:");
					}
				}
			},

			getPlanets: async () => {
				let planetsStored = [];
				for (let i = 0; i < 6; i++) {
					let response = await fetch(nextPlanet);
					let responseAsJson = await response.json();
					responseAsJson.results.map(element => {
						planetsStored.push(element);
					});
					setStore({ planets: planetsStored });
					if (responseAsJson.next != null) {
						nextPlanet = responseAsJson.next.replace("http:", "https:");
					}
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
