import React from "react";
import { Layout, AboutMe, SEO } from "../components";

const Index = () => (
	<>
		<Layout>
			<div id='index'>
				<AboutMe />
			</div>
		</Layout>
	</>
);

export default Index;

export const Head = () => <SEO title='Home' />;
