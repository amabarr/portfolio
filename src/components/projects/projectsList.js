import React from "react";
import ProjectData from "../../content/data";
import SingleProject from "./singleProject";

const ProjectsList = () => {
	const keys = Object.keys(ProjectData);
	return (
		<div className='projects-list flex'>
			{keys.map((data, index) => {
				return (
					<SingleProject data={ProjectData[data]} key={`project${index}`} />
				);
			})}
		</div>
	);
};

export default ProjectsList;
