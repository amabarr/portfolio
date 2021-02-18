import * as React from "react";
import { Layout, ProjectsList, SEO } from "../components/index";

const projects = () => (
	<>
		<Layout>
			<SEO title='Projects' />
			<ProjectsList />
		</Layout>
	</>
);

export default projects;
