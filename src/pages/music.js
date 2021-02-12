import * as React from "react";
import Layout from "../components/layout";
import Music from "../components/music";

const music = () => (
	<>
		<Layout>
			<div className='musicPage flex'>
				<Music />
			</div>
		</Layout>
	</>
);

export default music;
