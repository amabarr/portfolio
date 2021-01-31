import * as React from "react";
import { Link } from "gatsby";
import ThemeSelector from "./themeSelector";

const Header = () => (
	<>
		<div id='name'>
			<Link to='/'>Amanda Barrafato</Link>
		</div>
		<div className='links flex'>
			{/* I want these to hamburger */}
			<Link to='/projects'>projects!</Link>
			<Link to='/music'>music!</Link>
			<Link to='/skills'>skills!</Link>
			<Link to='/contact'>contact me</Link>

			<ThemeSelector />
		</div>
	</>
);

export default Header;
