import React from "react";
import Resume from '../data/Amanda_Barrafato_Resume.pdf'
import {SkillDataType, skillsData} from "../content/skills";

export const Skills: React.FC = () => (
	<div className='resumeArea'>
		<div className='skillsList flex'>
			{Object.keys(skillsData).map((type, index) => {
				return (
					<div className='skills flex' key={`skills_list_${index}`}>
						<h3>{type}</h3>
						<ul>
							{skillsData[type as SkillDataType].map((item, index) => {
								return <li key={`${type}_${index}`}>{item}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>

		<a href={Resume} className='underline links'>
			download my resume
		</a>
	</div>
);

