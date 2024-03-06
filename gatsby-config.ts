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
	plugins: [
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Amanda Barrafato's portfolio",
				short_name: "Amanda",
				start_url: "/",
				background_color: "#6b37bf",
				theme_color: "#6b37bf",
				display: `minimal-ui`,
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Creepster: 400"],
				},
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-emojis",
						options: {
							active: true,
							class: "emoji-icon",
							escapeCharacter: "#",
							size: 64,
							styles: {
								display: "inline",
								margin: "0",
								"margin-top": "1px",
								position: "relative",
								top: "5px",
								width: "25px",
							},
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: "*" }],
					},
					"branch-deploy": {
						policy: [{ userAgent: "*", disallow: ["/"] }],
						sitemap: null,
						host: null,
					},
					"deploy-preview": {
						policy: [{ userAgent: "*", disallow: ["/"] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
	],
};
