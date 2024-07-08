import React, { useState } from "react";

enum ColorMode {
	DARK = "dark",
	LIGHT = "light",
} 

interface ColorModeContextType {
	colorMode: ColorMode;
	setColorMode: (mode: ColorMode) => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
	colorMode: ColorMode.LIGHT,
	setColorMode: () => null,
});

export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.LIGHT);

	return (
		<ColorModeContext.Provider
			value={{
				colorMode,
				setColorMode,
			}}
		>
			{children}
		</ColorModeContext.Provider>
	);
};
