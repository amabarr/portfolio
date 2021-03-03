import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default ({ data, image }) => {
	return (
		<div className='project flex'>
			<img src={image} alt={data.alt} loading='lazy' className='screenshot' />
			<div className='project-des'>
				<h3>{data.name}</h3>
				<hr />
				<h5>Description:</h5>
				<p>{data.description}</p>
				<h5>Overview:</h5>
				<p>{data.overview}</p>
				<h5>Technology used:</h5>
				<p>{data.technology}</p>

				<div className='project-links icon'>
					<a href={data.gitHub} className='project-links-icon'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href={data.deployedURL} className='underline'>
						Visit
					</a>
				</div>
			</div>
		</div>
	);
};
