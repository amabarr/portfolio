import * as React from "react";
import { Layout, SEO, AboutMe } from "../components";

const IndexPage = () => (
	<>
		<Layout>
			<SEO title='Home' />
			<div id='index'>
				<AboutMe />
			</div>
		</Layout>
	</>
);

export default IndexPage;
