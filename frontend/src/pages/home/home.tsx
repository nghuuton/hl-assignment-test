import React from "react";
import { JOKES } from "../../constants/DUMMY";
import Footer from "../../containers/footer/footer";
import Header from "../../containers/header/header";
import Section from "../../containers/section/section";
import Joke from "./components/joke";

export interface HomeProps {}

export interface JokeI {
	content: string;
	id: number;
}

const Home: React.FC<HomeProps> = () => {
	const [jokes, setJokes] = React.useState(JOKES);
	const [currentJoke, setCurrentJoke] = React.useState<JokeI | null>(null);

	React.useEffect(() => {
		ranDomJoke();
	}, []);

	function ranDomJoke() {
		const ranDomIndex = Math.floor(Math.random() * Number(jokes.length - 1));
		const exits = jokes[ranDomIndex];

		setCurrentJoke(exits ? exits : null);
		setJokes((prev) => prev.filter((item, index) => index !== ranDomIndex));
	}

	function onPressJoke(isFunny: boolean) {
		ranDomJoke();
	}

	return (
		<div>
			<Header />
			<Section />
			{!Boolean(jokes.length === 0 && !currentJoke) ? (
				<Joke joke={currentJoke} onPressJoke={onPressJoke} />
			) : (
				<div
					style={{
						display: "flex",
						height: 100,
						backgroundColor: "#FFF",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<span style={{ fontSize: 23 }}>End game</span>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Home;
