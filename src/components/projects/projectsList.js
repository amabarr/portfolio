import React from "react";
import JSONData from "../../content/projects.json";
import SingleProject from "./singleProject";
import synth from "../../images/synth.jpg";
import GraceCropper from "../../images/GraceCropper.jpg";
import ExquisiteCorpse from "../../images/ExquisiteCorpse.jpg";

const ProjectsList = () => {
	const image = {
		synth: synth,
		GraceCropper: GraceCropper,
		ExquisiteCorpse: ExquisiteCorpse,
	};

	return (
		<div className='projects-list flex'>
			{JSONData.projects.map((data, index) => {
				return (
					<SingleProject
						data={data}
						image={image[data.image]}
						key={`projects_list_${index}`}
					/>
				);
			})}
		</div>
	);
};

export default ProjectsList;
