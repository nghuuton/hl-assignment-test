import React from "react";

export interface SectionTextProps {}

const SectionText: React.FC<SectionTextProps> = () => {
	return (
		<div style={{ backgroundColor: "#29B363", height: 180, justifyContent: "center", alignItems: "center" }}>
			<span style={{ fontSize: 22, fontWeight: "500", color: "#FFF", marginBottom: 20 }}>
				A joke a day keeps the doctor away
			</span>
			<span style={{ color: "#FFF", fontSize: 13.5, fontWeight: "500" }}>
				If you joke wrong way, your teeth have to pay. (Serious)
			</span>
		</div>
	);
};

export default SectionText;
