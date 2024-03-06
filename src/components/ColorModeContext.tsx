import React from "react";
import { useDarkMode } from "usehooks-ts";

type ColorMode = "dark" | "light";

interface ColorModeContextType {
	colorMode: ColorMode;
	setColorMode: (mode: ColorMode) => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
	colorMode: "light",
	setColorMode: () => null,
});

export const COLOR_MODE_STORAGE_KEY = "theme";

export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { isDarkMode, toggle } = useDarkMode();

	return (
		<ColorModeContext.Provider
			value={{
				colorMode: isDarkMode ? "dark" : "light",
				setColorMode: toggle,
			}}
		>
			{children}
		</ColorModeContext.Provider>
	);
};
