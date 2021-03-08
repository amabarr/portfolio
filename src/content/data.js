import synth from "../images/synth.jpg";
import fft from "../images/fft.jpg";
import GraceCropper from "../images/GraceCropper.jpg";
import ExquisiteCorpse from "../images/ExquisiteCorpse.jpg";

const ProjectData = {
	amb_synth: {
		name: "AMB Synth",
		description: "A synth web application made with React and Tone.js",
		gitHub: "https://github.com/amabarr/synth",
		deployedURL: "https://amb-synth.herokuapp.com/",
		image: synth,
		alt: "Amanda's Synth Website",
		overview:
			"I designed this web application from scratch as apart of a hackathon to make a synth within a week. I used my knowledge of synths, web keyboards, and my experience as a musician to choose which features I would like to include. It was a fun challenge to complete in a week, and I plan on adding more features to make this synth more customizable for users.",
		technology: "Node.js, React.js, Tone.js, Heroku",
	},
	xquisiteCorpse: {
		name: "Exquisite Corpse",
		description:
			"A real-time collaborative online drawing game with social features.",
		gitHub: "https://github.com/the-exquisite-game/exquisite-corpse",
		deployedURL: "https://xquisitecorpse.herokuapp.com/",
		image: ExquisiteCorpse,
		alt: "A purple Frankenstein",
		overview:
			"Digitized a classic drawing game using modern web technologies: React, Socket.io, Express, Sequelize, Konva and the HTML5 Canvas as apart of a four member team. Requires four players to start a game!",
		technology:
			"HTML5 Canvas, React.js, Express, React Konva, Sequelize, PostgresSQL, Socket.io, Node.js, Heroku",
	},
	Synesthesia: {
		name: "Synesthesia",
		description:
			"An FFT Plot app made with React, Three.js and the Web Audio API from Javascript.",
		gitHub: "https://github.com/amabarr/FFT_plot",
		deployedURL: "https://synthesia.herokuapp.com/",
		image: fft,
		alt: "The FFT Plot",
		overview:
			"Users can use their microphones to view sound in three different ways, as functions of time, amplitude or as a 3D light show representation. ",
		technology: "Web Audio API, React.js, Node.js, Heroku",
	},
	GraceCropper: {
		name: "Grace-Cropper",
		description:
			"A e-commerce site for Crop Tops, Crops, and Cropped Pictures with auth, filtering, stripe, and cart features for easy checkout.",
		gitHub: "https://github.com/gracecropper/gracecropper",
		deployedURL: "https://grace-cropper.herokuapp.com/",
		image: GraceCropper,
		alt: "The e-commerce website",
		overview:
			"I worked alongside a four member team where we all shared ownership of the backend and frontend. We worked together to complete this e-commerce website within a week.",
		technology:
			"React.js, Redux, PostgresSQL, Sequelize, Socket.io, Bootstrap, Heroku, Express, Axios, Stripe, OAuth",
	},
};

export default ProjectData;
