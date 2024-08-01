import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components";

export const CustomLayout: GatsbyBrowser["wrapPageElement"] = ({
	element,
	...props
}) => {
	return <Layout {...props}>{element}</Layout>;
};
