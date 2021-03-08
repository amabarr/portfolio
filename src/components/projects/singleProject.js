import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default ({ data }) => {
	return (
		<div className='project flex'>
			<div className='project-image'>
				<img
					src={data.image}
					alt={data.alt}
					loading='lazy'
					className='screenshot'
				/>
			</div>
			<div className='project-des hidden'>
				<h3>{data.name}</h3>
				<hr />
				<h5>Description:</h5>
				{data.description}
				<h5>Overview:</h5>
				{data.overview}
				<h5>Tech stack:</h5>
				{data.technology}

				<div className='project-links icon'>
					<a
						href={data.gitHub}
						className='project-links-icon'
						aria-label={`${data.name} github`}
					>
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
