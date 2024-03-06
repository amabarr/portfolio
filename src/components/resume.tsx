import React from "react";

import { SkillDataType, skillsData } from "../content/skills";
import { DownloadResumeLink } from "./DownloadResumeLink";

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

		<DownloadResumeLink />
	</div>
);
