import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeSelector = () => {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<label>
					<input
						type='checkbox'
						className='theme-changer'
						onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
						checked={theme === "dark"}
					/>{" "}
					<div className='theme-container'>
						<i className='gg-sun'></i>
						<i className='gg-moon'></i>
					</div>
				</label>
			)}
		</ThemeToggler>
	);
};

export default ThemeSelector;
