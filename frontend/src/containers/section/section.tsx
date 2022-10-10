import React from "react";
import "./section.css";
export interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
	return (
		<div className="section">
			<span className="title">A joke a day keeps the doctor away</span>
			<span className="subtitle">If you joke wrong way, your teeth have to pay. (Serious)</span>
		</div>
	);
};

export default Section;
