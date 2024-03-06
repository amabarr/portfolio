import React from "react";
import { FooterLinks, Header } from ".";
import "../styles/layout.css";
import { ColorModeContextProvider } from "./ColorModeContext";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<ColorModeContextProvider>
		<header className='flex'>
			<Header />
		</header>
		<main className='main flex'>{children}</main>
		<footer className='flex'>
			<FooterLinks />
		</footer>
	</ColorModeContextProvider>
);

export default Layout;
