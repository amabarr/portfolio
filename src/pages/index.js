import * as React from "react";
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";
import Resume from "../data/Amanda_Barrafato_Resume.pdf";
import TimeLine from "../components/timeline";

const IndexPage = () => (
	<>
		<Layout>
			<div id='index'>
				<AboutMe />

				<a href={Resume} className='underline'>
					Download My Resume
				</a>

				<TimeLine />
			</div>
		</Layout>
	</>
);

export default IndexPage;
