import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


export const Footer = () => (
	// TODO:  add icons, remove class names
	<footer className='flex'>
		<div className='footer iconLinks links flex'>
			<a
				href='https://www.linkedin.com/in/amanda-barrafato/'
				aria-label='LinkedIn'
			>
				<FaLinkedin />
			</a>
			<a href='https://github.com/amabarr/' aria-label='Github'>
			<FaGithub />
			</a>
		</div>
	</footer>
);
