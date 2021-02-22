import * as React from "react";
import { Link } from "gatsby";
import { Layout, SEO } from "../components";

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title='Not Found' />
			<div className='error flex'>
				<h1 className='error-title'>404</h1>
				<h2 className='error'>PAGE NOT FOUND</h2>
				<p>
					<span role='img' aria-label='Pensive emoji'>
						😔
					</span>{" "}
					Sorry{" "}
					<span role='img' aria-label='Pensive emoji'>
						😔
					</span>{" "}
					<br />
					We couldn’t find what you were looking for.
					<br />
					<br />
					<Link to='/' className='underline'>
						Go home
					</Link>
				</p>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
