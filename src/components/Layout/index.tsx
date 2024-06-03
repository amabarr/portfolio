import React from "react";

import "../../styles/layout.css";
import {
	ColorModeContext,
	ColorModeContextProvider,
} from "../ColorModeContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<ColorModeContextProvider>
		<ColorModeContext.Consumer>
			{({ colorMode }) => (
				<div className={colorMode === "dark" ? "dark layout" : "light layout"}>
					<Header />
					<main className='main flex'>{children}</main>
					<Footer />
				</div>
			)}
		</ColorModeContext.Consumer>
	</ColorModeContextProvider>
);
