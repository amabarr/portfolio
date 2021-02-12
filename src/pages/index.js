import * as React from "react";
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";
import selfPortrait from "../images/githubphoto.jpg";

const IndexPage = () => (
	<>
		<Layout>
			<div id='index'>
				<AboutMe />
				<h2>Hi! I'm Amanda</h2>
				<h3>an audio engineer, fullstack software engineer, and a musician!</h3>

				<img src={selfPortrait} alt='Amanda' />
			</div>
		</Layout>
	</>
);

export default IndexPage;
