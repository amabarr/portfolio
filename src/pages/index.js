import * as React from "react";
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";

const IndexPage = () => (
	<>
		<Layout>
			<div id='index'>
				<AboutMe />
			</div>
		</Layout>
	</>
);

export default IndexPage;
