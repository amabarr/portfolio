import React from "react";

import "../../styles/layout.css";
import {
	ColorModeContext,
	ColorModeContextProvider,
} from "../ColorModeContext";
import { Header } from "./header1";
import { FooterLinks } from "./FooterLinks";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<ColorModeContextProvider>
		<ColorModeContext.Consumer>
			{({ colorMode }) => (
				<div className={colorMode === "dark" ? "dark layout" : "light layout"}>
					<header className='flex'>
						<Header />
					</header>
					<main className='main flex'>{children}</main>
					<footer className='flex'>
						<FooterLinks />
					</footer>
				</div>
			)}
		</ColorModeContext.Consumer>
	</ColorModeContextProvider>
);

export default Layout;
