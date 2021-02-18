import * as React from "react";
import { Layout, SEO, AboutMe } from "../components";

const Index = () => (
	<>
		<Layout>
			<SEO title='Home' />
			<div id='index'>
				<AboutMe />
			</div>
		</Layout>
	</>
);

export default Index;
