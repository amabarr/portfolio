import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterLinks = () => (
	<div className='footer iconLinks links flex'>
		<a href='https://www.linkedin.com/in/amanda-barrafato/'>
			<FontAwesomeIcon icon={faLinkedin} />
		</a>
		<a href='https://github.com/amabarr/'>
			<FontAwesomeIcon icon={faGithub} />
		</a>
	</div>
);

export default FooterLinks;
