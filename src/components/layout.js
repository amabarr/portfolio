import * as React from "react";
import { Link } from "gatsby";
import FooterLinks from "./footerLinks";
import "./layout.css";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<div id='name'>
					<Link to='/'>Amanda Barrafato</Link>
				</div>
				<div className='links'>
					<Link to='/projects'>projects!</Link>
					<Link to='/music'>music!</Link>
					<Link to='/resume'>resume!</Link>
				</div>
			</header>
			<main className='main'>{children}</main>
			<footer>
				<FooterLinks />
			</footer>
		</>
	);
};

export default Layout;
