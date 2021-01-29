module.exports = {
	siteMetadata: {
		title: "Amanda Barrafato's Portfolio",
	},
	plugins: [
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
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
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: [
					`Creepster`,
					"Fira Code", // you can also specify font weights and styles
				],
				display: "swap",
			},
		},
	],
};
