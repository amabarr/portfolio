import * as React from "react";
import linkedin from "../images/icons/LI-In-Bug.png";

const FooterLinks = () => (
	<div className='footer links'>
		<a href='https://www.linkedin.com/in/amanda-barrafato/'>
			<img src={linkedin} alt='LinkedIn logo' />
		</a>
		<a href='https://github.com/amabarr/'>
			<img src='/icons/GitHub-Mark-Light-32px.png' alt='Github Logo' />
		</a>
	</div>
);

export default FooterLinks;
