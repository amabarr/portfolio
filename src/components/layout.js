import React from "react";
import { FooterLinks, Header } from ".";
import "../styles/layout.css";

const Layout = ({ children }) => {
	return (
		<>
			<header className='flex'>
				<Header id='desktop-nav' />
			</header>
			<main className='main flex'>{children}</main>
			<footer className='flex'>
				<FooterLinks />
			</footer>
		</>
	);
};

export default Layout;
