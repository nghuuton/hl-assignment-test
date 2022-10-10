import React from "react";

export interface ActionJokeProps {
	onPressJoke: (isFunny: boolean) => void;
}

const ActionJoke: React.FC<ActionJokeProps> = ({ onPressJoke }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
				marginTop: "20%",
			}}
		>
			<div
				style={{
					paddingLeft: 8,
					paddingRight: 8,
					paddingTop: 10,
					paddingBottom: 10,
					backgroundColor: "#2C7EDB",
					cursor: "pointer",
				}}
				onClick={() => onPressJoke(true)}
			>
				<span style={{ color: "#FFF" }}>This is Funny!</span>
			</div>
			<div
				style={{
					paddingLeft: 8,
					paddingRight: 8,
					paddingTop: 10,
					paddingBottom: 10,
					backgroundColor: "#29B363",
					cursor: "pointer",
				}}
				onClick={() => onPressJoke(false)}
			>
				<span style={{ color: "#FFF" }}>This is not Funny.</span>
			</div>
		</div>
	);
};

export default ActionJoke;
