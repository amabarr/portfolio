import React from "react";
import selfPortrait from "../images/githubphoto.jpg";

const AboutMe = () => {
	return (
		<div className='aboutMe'>
			<img src={selfPortrait} alt='Amanda' />
			<div className='about'>
				<h3>Amanda Barrafato</h3>
				<h5> Fullstack Engineer</h5>
				<span>
					<p>
						I am a musician, audio engineer and fullstack engineer based in
						Brooklyn, NY.
					</p>
					<p>
						I started playing the guitar at eight years old, and had big dreams
						to become a heavy metal guitar goddess. I also loved to mess around
						with computers, and electronics and found myself making a MIDI
						guitar in college using Arduino. My ideal position is a combination
						of my two passions in life: music and technology.
					</p>
					<p>
						When I'm not coding, you can find me playing guitar, curled up
						reading a book next to my cat Lucas, at a concert, playing dungeons
						and dragons, or playing an RPG.
					</p>
					Links to linkedIn & github & medium here
				</span>
			</div>
		</div>
	);
};

export default AboutMe;
