import React from "react";
import { useTernaryDarkMode } from "usehooks-ts";

type ColorMode = "dark" | "light";

interface ColorModeContextType {
	colorMode: ColorMode;
	setColorMode: (mode: ColorMode) => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
	colorMode: "light",
	setColorMode: () => null,
});

export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

	console.log("ternary dark mode", ternaryDarkMode);
	return (
		<ColorModeContext.Provider
			value={{
				colorMode: ternaryDarkMode === "dark" ? "dark" : "light",
				setColorMode: (mode) => {
					console.log("I AM CLICKING", mode);
					return setTernaryDarkMode(mode);
				},
			}}
		>
			{children}
		</ColorModeContext.Provider>
	);
};
