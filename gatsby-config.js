module.exports = {
	siteMetadata: {
		title: "Amanda Barrafato",
		description: "Amanda Barrafato's Portfolio",
		author: "Amanda Barrafato",
		image: "src/images/icon.png",
	},
	plugins: [
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
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
		"gatsby-plugin-dark-mode",
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// In your gatsby-transformer-remark plugin array
				plugins: [
					{
						resolve: "gatsby-remark-emojis",
						options: {
							// Deactivate the plugin globally (default: true)
							active: true,
							// Add a custom css class
							class: "emoji-icon",
							// In order to avoid pattern mismatch you can specify
							// an escape character which will be prepended to the
							// actual pattern (e.g. `#:poop:`).
							escapeCharacter: "#", // (default: '')
							// Select the size (available size: 16, 24, 32, 64)
							size: 64,
							// Add custom styles
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
	],
};
