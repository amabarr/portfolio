import React from "react";
import Acoustics from "../images/acoustics.png";
import GraceHopper from "../images/gracehopper.jpg";
import NYU from "../images/nyulogo.png";

export default () => {
	return (
		<div className='timelineArea'>
			<h4>Experience</h4>

			<ul className='timeline'>
				<li className='event'>
					<img src={GraceHopper} alt='Grace Hopper Logo' />
					Graduating from Grace Hopper
				</li>
				<li className='event' data-date='2004'>
					I started playing guitar!
				</li>
				<li className='event' data-date='2013'>
					I got into my dream college
				</li>
				<li className='event' data-date='2017'>
					<img src={NYU} alt='New York University Logo' />I graduated from my
					dream school
				</li>
				<li className='event' data-date='2020'>
					<img src={Acoustics} alt='Sound Wave' />
					The world fell apart and I changed career paths!
				</li>
			</ul>
		</div>
	);
};
