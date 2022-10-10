import React from "react";
import "./footer.css";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<div className="footer">
			<span className="description">
				This apps created as part of Hlsolutions program. The materials contained on this website are provided
				for general information only and do not constitute any form of advice. HLS assumes no responsibility for
				the accuracy of any particular state meant and accepts no liability for any loss or damage which may
				arise from reliance on the information contained on this site.
			</span>
			<span className="copyright">Copyright 2021 HLS</span>
		</div>
	);
};

export default Footer;
