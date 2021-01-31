import * as React from "react";
import ContactForm from "../components/contactForm";
import ContactMethods from "../components/contactMethods";
import Layout from "../components/layout";

const Contact = () => (
	<Layout>
		<h2>Contact Me!</h2>
		<ContactForm />
		<ContactMethods />
	</Layout>
);
export default Contact;
