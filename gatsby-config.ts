const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = "https://www.amanda.dev",
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
	siteMetadata: {
		title: "Amanda Barrafato",
		description: "Amanda Barrafato's Portfolio",
		author: "Amanda Barrafato",
		image: "src/images/icon.png",
		siteUrl,
	},
	plugins: []
};
