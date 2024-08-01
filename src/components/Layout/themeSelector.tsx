import React, { useContext } from "react";
import { ColorMode, ColorModeContext } from "../ColorModeContext";

export const ThemeSelector = () => {
	const { colorMode, setColorMode } = useContext(ColorModeContext);

	return (
		<div aria-hidden>
			{colorMode === "dark" ? (
				<i
					className='gg-sun'
					onClick={() => setColorMode(ColorMode.LIGHT)}
					aria-label='Set light mode'
				/>
			) : (
				<i
					className='gg-moon'
					onClick={() => {
						return setColorMode(ColorMode.DARK);
					}}
					aria-label='Set dark mode'
				/>
			)}
		</div>
	);
};
