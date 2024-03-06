import React from "react";
import selfPortrait from "../images/me.jpg";
import { DownloadResumeLink } from "./DownloadResumeLink";

export const AboutMe = () => {
	return (
		<div className='aboutMe'>
			<img
				src={selfPortrait}
				alt='Amanda'
				loading='lazy'
				className='selfPortait'
			/>
			<div className='about'>
				<h2>Hi, I'm Amanda</h2>
				<span>
					<p>I am a musician and fullstack engineer based in Brooklyn, NY.</p>
					<p>
						I started playing the guitar at eight years old, and had big dreams
						to become a heavy metal guitar goddess. I also loved to tinker with
						computers / electronics, and found myself making a MIDI guitar in
						college using Arduino. My ideal position is a combination of my two
						passions in life: music and technology.
					</p>
					<p>
						When I'm not coding, you can find me playing guitar, curled up
						reading a book next to my cat Lucas, at a concert, playing dungeons
						and dragons, grabbing some coffee with friends, or playing an RPG.
					</p>
				</span>

				<DownloadResumeLink />
			</div>
		</div>
	);
};
