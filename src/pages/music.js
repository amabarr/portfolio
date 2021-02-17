import * as React from "react";
import { Layout, Music, SEO } from "../components";

const music = () => (
	<>
		<Layout>
			<SEO title='Music' />
			<div className='musicPage flex'>
				<Music />
			</div>
		</Layout>
	</>
);

export default music;
