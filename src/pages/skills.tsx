import * as React from "react";
import { Layout, SEO } from "../components";

import { Skills } from "../components/resume";

const SkillsPage = () => (
	<Layout>
		<SEO title='Skills' />
		<Skills />
	</Layout>
);

export default SkillsPage;
