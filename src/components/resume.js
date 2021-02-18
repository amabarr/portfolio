import React from "react";
import Resume from "../data/Amanda_Barrafato_Resume.pdf";
import JSONData from "../content/skills.json";

const Skills = () => (
	<div className='resumeArea'>
		<div className='skillsList flex'>
			{Object.keys(JSONData).map((data, index) => {
				return (
					<div className='skills flex' key={`skills_list_${index}`}>
						<h3>{data}</h3>
						<ul>
							{JSONData[data].map((item, index) => {
								return <li key={`${data}_${index}`}>{item}</li>;
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

export default Skills;
