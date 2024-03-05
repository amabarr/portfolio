import React from "react";
import Resume from '../data/Amanda_Barrafato_Resume.pdf'
import SKILLS_DATA from "../content/skills.json";

export const Skills: React.FC = () => (
	<div className='resumeArea'>
		<div className='skillsList flex'>
			{Object.keys(SKILLS_DATA).map((type, index) => {
				return (
					<div className='skills flex' key={`skills_list_${index}`}>
						<h3>{type}</h3>
						<ul>
							{SKILLS_DATA[type].map((item, index) => {
								return <li key={`${type}_${index}`}>{item}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>

		<a href={""} className='underline links'>
			download my resume
		</a>
	</div>
);

