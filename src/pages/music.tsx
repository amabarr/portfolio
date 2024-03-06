import * as React from "react";
import { Layout, Music, SEO } from "../components";

const music = () => (
	<>
		<Layout>
			<Music />
		</Layout>
	</>
);

export default music;


export const Head = () => {
	<SEO title="Music"/>
}
