import * as React from "react";

const Resume = () => (
	<div className='resumeArea flex'>
		<div className='skills flex'>
			<h4>Frontend</h4>
			<ul>
				<li>JavaScript</li>
				<li>React</li>
				<li>Redux</li>
				<li>CSS</li>
				<li>HTML5</li>
			</ul>
		</div>
		<div className='skills flex'>
			<h4>Backend</h4>
			<ul>
				<li>NodeJS</li>
				<li>Express</li>
				<li>Sequelize</li>
				<li>PostgresSQL</li>
			</ul>
		</div>
		<div className='skills flex'>
			<h4>Other</h4>
			<ul>
				<li>C++</li>
				<li>Git</li>
				<li>
					Understand and can operate digital and analog consoles (Midas, Yamaha,
					DigiCo, iLive)
				</li>
				<li>Arduino</li>
				<li>Max/MSP</li>
				<li>Pro Tools</li>
				<li>Ableton Live</li>
			</ul>
		</div>
	</div>
);

export default Resume;
