import * as React from "react";
import Layout from "../components/layout";
import selfPortrait from "../images/githubphoto.jpg";

const IndexPage = () => (
	<>
		<Layout>
			<div id='index'>
				<span>
					<h2>Hi! I'm Amanda</h2>
					<h3>
						an audio engineer, fullstack softare engineer, and a musician!
					</h3>
					<span className='pictureOfMe'>
						<img src={selfPortrait} alt='Amanda' />
					</span>
				</span>
				<span className='aboutMe'>
					<h2>About Me</h2>
					<p>
						Wow, here is a story all about how my life got turned up inside out
						and I gotta take a moment so just you sit right there I'll tell you
						how I went on this jounrey to become a software engineerr...... in
						south Brooklyn born and raised
					</p>
				</span>
			</div>
		</Layout>
	</>
);

export default IndexPage;
