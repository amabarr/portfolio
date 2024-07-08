import React from "react";
import { AboutMe, SEO } from "../components";

const Index = () => (
	<>

			<div id='index'>
				<AboutMe />
			</div>
	
	</>
);

export default Index;

export const Head = () => <SEO title='Home' />;
