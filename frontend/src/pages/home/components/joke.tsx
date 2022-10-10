import React from "react";
import { JokeI } from "../home";
import ActionJoke from "./actionJoke";
import "./joke.css";
export interface JokeProps {
	joke: JokeI | null;
	onPressJoke: (isFunny: boolean) => void;
}

const Joke: React.FC<JokeProps> = ({ joke, onPressJoke }) => {
	return (
		<div className="content">
			<span className="text">{joke ? joke.content : ""}</span>
			<ActionJoke onPressJoke={onPressJoke} />
		</div>
	);
};

export default Joke;
