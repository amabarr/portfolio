import React, { useEffect, useState } from "react";

export enum ColorMode {
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

const colorModeKey = "color_mode";

function getInitialTheme() {
  if (typeof window === "undefined") return ColorMode.LIGHT

  const stored = localStorage.getItem(colorModeKey)
  if (stored === ColorMode.DARK || stored === ColorMode.LIGHT) return stored

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ColorMode.DARK
    : ColorMode.LIGHT
}


export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [colorMode, setColorMode] = useState<ColorMode>(getInitialTheme());

	useEffect(() => {
		const localStorageColorMode = localStorage.getItem(colorModeKey);
		if (
			localStorageColorMode !== colorMode &&
			typeof localStorageColorMode === "string"
		) {
			setColorMode(localStorageColorMode as ColorMode);
		}
	}, [setColorMode]);

	useEffect(() => {
		localStorage.setItem(colorModeKey, colorMode);
	}, [colorMode]);

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
