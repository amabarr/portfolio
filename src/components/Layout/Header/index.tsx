import React from "react";
import { Link } from "gatsby";
import { ThemeSelector } from "../themeSelector";

export const Header = () => (
	<header className='flex'>
		<div id='name'>
			<Link to='/' id='amanda'>
				Amanda Barrafato
			</Link>
		</div>
		<div className='links flex'>
			<Link to='/' className='underline'>
				HOME
			</Link>
			<Link to='/music' className='underline'>
				MUSIC
			</Link>
			<Link to='/skills' className='underline'>
				SKILLS
			</Link>
			<Link to='/contact' className='underline'>
				CONTACT ME
			</Link>
			<ThemeSelector />
		</div>
	</header>
);
