import React, { useContext, useMemo } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import { useDarkMode, useTernaryDarkMode } from "usehooks-ts";
import { ColorModeContext } from "./ColorModeContext";

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

	return (
		<>
			<title>{seo.title} | Amanda Barrafato</title>
			<meta name='description' content={seo.description} />
			<html lang='en' />
			{children}
		</>
	);
};
