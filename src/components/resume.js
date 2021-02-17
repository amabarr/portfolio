import React from "react";
import Resume from "../data/Amanda_Barrafato_Resume.pdf";

const Skills = () => (
	<div className='resumeArea'>
		<div className='skillsList flex'>
			<div className='skills flex'>
				<h3>Frontend</h3>
				<ul>
					<li>JavaScript</li>
					<li>React</li>
					<li>Redux</li>
					<li>CSS</li>
					<li>HTML5</li>
				</ul>
			</div>
			<div className='skills flex'>
				<h3>Backend</h3>
				<ul>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Sequelize</li>
					<li>PostgresSQL</li>
				</ul>
			</div>
			<div className='skills flex'>
				<h3>Other</h3>
				<ul>
					<li>C++</li>
					<li>Git</li>
					<li>
						Understand and can operate digital and analog consoles (Midas,
						Yamaha, DigiCo, iLive)
					</li>
					<li>Arduino</li>
					<li>Max/MSP</li>
					<li>Pro Tools</li>
					<li>Ableton Live</li>
				</ul>
			</div>
		</div>
		<a href={Resume} className='underline links'>
			download my resume
		</a>
	</div>
);

export default Skills;
