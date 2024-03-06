import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import { useDarkMode } from "usehooks-ts";

interface SEOProps {
	title?: string;
	description?: string;
	pathname?: string;
}

export const SEO = ({
	title,
	description,
	pathname,
	children,
}: React.PropsWithChildren<SEOProps>) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl,
	} = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
	};

	const { isDarkMode } = useDarkMode();

	console.log("isDarkMode inside of SEO", isDarkMode);

	return (
		<>
			<title>{seo.title} | Amanda Barrafato</title>
			<meta name='description' content={seo.description} />
			<html lang='en' />
			<body className={isDarkMode ? "dark" : "light"} />
			{children}
		</>
	);
};
