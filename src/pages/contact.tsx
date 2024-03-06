import * as React from "react";
import { Layout, SEO } from "../components";
import { ContactForm } from "../components/contactForm";

const Contact = () => (
	<Layout>
		<ContactForm />
	</Layout>
);

export default Contact;

export const Head = () => {
	<SEO title="Contact Me"/>
}
