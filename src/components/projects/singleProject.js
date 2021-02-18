import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default ({ data, image }) => {
	return (
		<div className='project flex'>
			<img src={image} alt={data.alt} className='screenshot' />

			<div className='project-des'>
				<h3>{data.name}</h3>
				<p>{data.description}</p>
			</div>

			<div className='project-links'>
				<a href={data.gitHub} className='project-git'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href={data.deployedURL} className='underline'>
					Visit
				</a>
			</div>
		</div>
	);
};
