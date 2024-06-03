import Resume from "../../data/Amanda_Barrafato_Resume.pdf";
import React from "react";

export const DownloadResumeLink = () => (
	<a href={Resume} className='underline resumeLinks'>
		download my resume
	</a>
);
