import React, { useState } from "react";
import { projects } from "../../content/projects.json";
import SingleProject from "./singleProject";
import synth from "../../images/synth.jpg";
import fft from "../../images/fft.jpg";
import GraceCropper from "../../images/GraceCropper.jpg";
import ExquisiteCorpse from "../../images/ExquisiteCorpse.jpg";

const ProjectsList = () => {
	const [project, setProject] = useState(0);

	const image = {
		fft: fft,
		synth: synth,
		GraceCropper: GraceCropper,
		ExquisiteCorpse: ExquisiteCorpse,
	};

	const changeProject = (val) => {
		setProject(val);
	};

	return (
		<div className='projects-list flex'>
			<div className='project-buttons flex'>
				{projects.map((data, index) => {
					return (
						<button
							key={`project${index}`}
							className={
								project === index
									? "project-selector selected"
									: "project-selector"
							}
							value={index}
							name={data.name}
							onClick={(e) => changeProject(e.target.value)}
						>
							{data.name}
						</button>
					);
				})}
			</div>

			<SingleProject
				data={projects[project]}
				image={image[projects[project].image]}
			/>
		</div>
	);
};

export default ProjectsList;
