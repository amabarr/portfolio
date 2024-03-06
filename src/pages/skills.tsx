import * as React from "react";
import { Layout, SEO } from "../components";

import { Skills } from "../components/resume";

const SkillsPage = () => (
	<Layout>
		<Skills />
	</Layout>
);

export default SkillsPage;


export const Head = () => {
	<SEO title="Skills"/>
}
