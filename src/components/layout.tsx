import React from "react";
import { FooterLinks, Header } from ".";
import "../styles/layout.css";

const Layout: React.FC<React.PropsWithChildren>= ({ children }) => {
	return (
		<>
			<header className='flex'>
				<Header />
			</header>
			<main className='main flex' lang="en">{children}</main>
			<footer className='flex'>
				<FooterLinks />
			</footer>
		</>
	);
};

export default Layout;
