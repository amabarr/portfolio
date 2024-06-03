import * as React from "react";
import { Layout, SEO, Skills } from "../components";

const SkillsPage = () => (
	<Layout>
		<Skills />
	</Layout>
);

export default SkillsPage;

export const Head = () => <SEO title='Skills' />;
