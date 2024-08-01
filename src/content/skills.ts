export enum SkillDataType {
	Frontend = "Frontend",
	Backend = "Backend",
	Languages = "Languages",
	Testing = "Testing",
	Other = "Other"
}

type SkillsDataType = {
[key in SkillDataType]: String[]
}


export const skillsData : SkillsDataType = {
	[SkillDataType.Frontend]: ["React", "Redux", "Next.js", "Gatsby", "HTML", "CSS", "Styled Components"],
	[SkillDataType.Backend]: ["Node.js", "Sequelize", "SQL", "PostgresSQL", "Axios", "Express"],
	[SkillDataType.Languages]: ["TypeScript", "JavaScript", "Ruby on Rails", "C++"],
	[SkillDataType.Testing]: ["Jest", "RSpec", "Mocha", "Chai", "Jasmine"],
	[SkillDataType.Other]: ["GraphQL", "Heroku", "Netlify", "GitHub Pages"]
}
