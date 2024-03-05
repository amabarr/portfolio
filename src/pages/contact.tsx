import * as React from "react";
import { Layout, SEO } from "../components";
import { ContactForm } from "../components/contactForm";

const Contact = () => (
	<Layout>
		<SEO title='Contact Me' />
		<ContactForm />
	</Layout>
);

export default Contact;
