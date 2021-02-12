import React from "react";
import linkedin from "../images/icons/LI-In-Bug.png";
import githubPhoto from "../images/icons/GitHub-Mark-Light-64px.png";

const FooterLinks = () => (
	<div className='footer links flex'>
		<a href='https://www.linkedin.com/in/amanda-barrafato/'>
			<img src={linkedin} alt='LinkedIn logo' />
		</a>
		<a href='https://github.com/amabarr/'>
			<img src={githubPhoto} alt='Github Logo' />
		</a>
	</div>
);

export default FooterLinks;
