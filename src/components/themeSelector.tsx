import React, { useContext } from "react";
import { ColorModeContext } from "./ColorModeContext";

export const ThemeSelector = () => {
	const { colorMode, setColorMode } = useContext(ColorModeContext);

	return (
		<div aria-hidden>
			{colorMode === "dark" ? (
				<i
					className='gg-sun'
					onClick={() => setColorMode("light")}
					aria-label='Set light mode'
				/>
			) : (
				<i
					className='gg-moon'
					onClick={() => setColorMode("dark")}
					aria-label='Set dark mode'
				/>
			)}
		</div>
	);
};
