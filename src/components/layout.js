import React from "react";
import FooterLinks from "./footerLinks";
import Header from "./header";

import "../styles/layout.css";

const Layout = ({ children }) => {
	return (
		<>
			<header className='flex'>
				<Header />
			</header>
			<main className='main flex'>{children}</main>
			<footer>
				<FooterLinks />
			</footer>
		</>
	);
};

export default Layout;
