import React from "react";
import { projects } from "../../content/projects.json";
import SingleProject from "./singleProject";
import synth from "../../images/synth.jpg";
import fft from "../../images/fft.jpg";
import GraceCropper from "../../images/GraceCropper.jpg";
import ExquisiteCorpse from "../../images/ExquisiteCorpse.jpg";

const ProjectsList = () => {
	const image = {
		fft: fft,
		synth: synth,
		GraceCropper: GraceCropper,
		ExquisiteCorpse: ExquisiteCorpse,
	};

	return (
		<div className='projects-list flex'>
			{projects.map((data, index) => {
				return (
					<SingleProject
						data={data}
						key={`project${index}`}
						image={image[data.image]}
					/>
				);
			})}
		</div>
	);
};

export default ProjectsList;
