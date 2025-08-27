// -----------------------------
// Types pour Talent Hub
// -----------------------------

export type Skill = {
	id: number;
	name: string;
};

export type MissionType = {
	id: number;
	name: string;
	description: string;
};

export type SalaryUnit = {
	id: number;
	label: string;
};

export type Announcement = {
	id: number;
	title: string;
	description: string;
	skills: number[]; // référence aux Skill
	typeId: number; // référence à MissionType
	startDate: Date;
	salary: number;
	salaryUnitId: number; // référence à SalaryUnit
	companyName: string;
	companyEmail: string;
	companyPhone: string;
	password: string; // réservé à l’édition/suppression
	createdAt: Date;
	updatedAt: Date;
};

export type AnnouncementComment = {
	id: number;
	username: string;
	content: string;
	createdAt: Date;
	announcementId: number;
};

// -----------------------------
// Données de référence
// -----------------------------

export const skills: Skill[] = [
	{ id: 1, name: "JavaScript" },
	{ id: 2, name: "TypeScript" },
	{ id: 3, name: "React" },
	{ id: 4, name: "Node.js" },
	{ id: 5, name: "UI/UX Design" },
	{ id: 6, name: "SQL" },
	{ id: 7, name: "Tests unitaires" },
];

export const missionTypes: MissionType[] = [
	{
		id: 1,
		name: "CDI",
		description: "Contrat à durée indéterminée.",
	},
	{
		id: 2,
		name: "CDD",
		description: "Contrat à durée déterminée.",
	},
	{
		id: 3,
		name: "Freelance",
		description: "Mission indépendante pour une durée définie.",
	},
	{
		id: 4,
		name: "Stage",
		description: "Expérience formatrice en entreprise.",
	},
];

export const salaryUnits: SalaryUnit[] = [
	{ id: 1, label: "€/mois" },
	{ id: 2, label: "€/an" },
	{ id: 3, label: "€/jour" },
];

// -----------------------------
// Annonces exemple enrichies
// -----------------------------

export const announcements: Announcement[] = [
	{
		id: 101,
		title: "Développeur Frontend React",
		description: "Nous recherchons un développeur frontend pour renforcer notre équipe sur un projet e-commerce.",
		skills: [1, 2, 3, 5],
		typeId: 1,
		startDate: new Date("2025-09-01"),
		salary: 3200,
		salaryUnitId: 1,
		companyName: "TechNova",
		companyEmail: "contact@technova.com",
		companyPhone: "+33 6 12 34 56 78",
		password: "secure123",
		createdAt: new Date("2025-08-22T18:12:00"),
		updatedAt: new Date("2025-08-24T18:19:00"),
	},
	{
		id: 102,
		title: "Administrateur Base de Données",
		description: "Mission freelance pour optimiser les performances et la sécurité des bases PostgreSQL.",
		skills: [4, 6, 7],
		typeId: 3,
		startDate: new Date("2025-09-15"),
		salary: 450,
		salaryUnitId: 3,
		companyName: "DataSecure",
		companyEmail: "jobs@datasecure.fr",
		companyPhone: "+33 1 98 76 54 32",
		password: "db2025",
		createdAt: new Date("2025-08-23T10:00:00"),
		updatedAt: new Date("2025-08-24T12:30:00"),
	},
	{
		id: 103,
		title: "UI/UX Designer Junior",
		description: "Stage de 6 mois pour travailler sur la refonte d'une application mobile.",
		skills: [5],
		typeId: 4,
		startDate: new Date("2025-10-01"),
		salary: 900,
		salaryUnitId: 1,
		companyName: "CreativeLab",
		companyEmail: "hr@creativelab.com",
		companyPhone: "+33 7 11 22 33 44",
		password: "designme",
		createdAt: new Date("2025-08-24T09:45:00"),
		updatedAt: new Date("2025-08-24T17:00:00"),
	},
	{
		id: 104,
		title: "Développeur Fullstack Node.js / React",
		description: "Projet SaaS en pleine croissance, recherche d’un profil polyvalent frontend/backend.",
		skills: [1, 2, 3, 4, 6, 7],
		typeId: 1,
		startDate: new Date("2025-09-10"),
		salary: 4000,
		salaryUnitId: 1,
		companyName: "CloudWorks",
		companyEmail: "jobs@cloudworks.io",
		companyPhone: "+33 9 87 65 43 21",
		password: "stackdev",
		createdAt: new Date("2025-08-25T11:20:00"),
		updatedAt: new Date("2025-08-25T11:20:00"),
	},
	{
		id: 105,
		title: "Ingénieur QA - Tests automatisés",
		description: "Mise en place de pipelines CI/CD et tests automatisés pour un grand compte bancaire.",
		skills: [7, 6, 2],
		typeId: 2,
		startDate: new Date("2025-09-20"),
		salary: 38000,
		salaryUnitId: 2,
		companyName: "Financia",
		companyEmail: "recrutement@financia.fr",
		companyPhone: "+33 1 22 33 44 55",
		password: "qualityfirst",
		createdAt: new Date("2025-08-26T08:30:00"),
		updatedAt: new Date("2025-08-26T08:30:00"),
	},
	{
		id: 106,
		title: "Consultant Data Analyst",
		description: "Analyse de données et création de dashboards BI pour un client retail.",
		skills: [6, 2],
		typeId: 3,
		startDate: new Date("2025-09-05"),
		salary: 500,
		salaryUnitId: 3,
		companyName: "InsightX",
		companyEmail: "career@insightx.com",
		companyPhone: "+33 6 55 44 33 22",
		password: "dataviz",
		createdAt: new Date("2025-08-26T14:00:00"),
		updatedAt: new Date("2025-08-26T14:00:00"),
	},
	{
		id: 107,
		title: "Stagiaire Développeur Mobile",
		description: "Participation au développement d’une app iOS/Android en React Native.",
		skills: [1, 2, 3, 5],
		typeId: 4,
		startDate: new Date("2025-10-15"),
		salary: 950,
		salaryUnitId: 1,
		companyName: "Appify",
		companyEmail: "stage@appify.dev",
		companyPhone: "+33 7 22 11 33 44",
		password: "mobilestage",
		createdAt: new Date("2025-08-26T15:45:00"),
		updatedAt: new Date("2025-08-26T15:45:00"),
	},
	{
		id: 108,
		title: "Lead Développeur Backend Node.js",
		description: "Encadrement d'une équipe de 5 devs pour une API haute performance.",
		skills: [2, 4, 6],
		typeId: 1,
		startDate: new Date("2025-09-12"),
		salary: 5000,
		salaryUnitId: 1,
		companyName: "APIForge",
		companyEmail: "hr@apiforge.io",
		companyPhone: "+33 1 44 55 66 77",
		password: "backendlead",
		createdAt: new Date("2025-08-26T18:00:00"),
		updatedAt: new Date("2025-08-26T18:00:00"),
	},
	{
		id: 109,
		title: "Designer UX Senior",
		description: "Amélioration des parcours utilisateurs d’une plateforme de réservation.",
		skills: [5],
		typeId: 2,
		startDate: new Date("2025-09-18"),
		salary: 42000,
		salaryUnitId: 2,
		companyName: "Travelio",
		companyEmail: "jobs@travelio.com",
		companyPhone: "+33 1 77 88 99 00",
		password: "uxsenior",
		createdAt: new Date("2025-08-27T09:15:00"),
		updatedAt: new Date("2025-08-27T09:15:00"),
	},
	{
		id: 110,
		title: "Développeur Junior JavaScript",
		description: "CDD de 6 mois pour renforcer l’équipe sur un projet interne.",
		skills: [1],
		typeId: 2,
		startDate: new Date("2025-09-22"),
		salary: 2800,
		salaryUnitId: 1,
		companyName: "SoftLink",
		companyEmail: "jobs@softlink.fr",
		companyPhone: "+33 6 77 66 55 44",
		password: "juniorjs",
		createdAt: new Date("2025-08-27T12:45:00"),
		updatedAt: new Date("2025-08-27T12:45:00"),
	},
];

// -----------------------------
// Commentaires enrichis
// -----------------------------

export const announcementComments: AnnouncementComment[] = [
	{ id: 1, username: "Alice", content: "Super opportunité pour les développeurs frontend !", createdAt: new Date("2025-08-24T19:00:00"), announcementId: 101 },
	{ id: 2, username: "Bob", content: "Le tarif freelance est correct, je vais postuler.", createdAt: new Date("2025-08-24T19:15:00"), announcementId: 102 },
	{ id: 3, username: "Charlie", content: "Parfait pour un stage, bonne expérience en perspective.", createdAt: new Date("2025-08-24T20:00:00"), announcementId: 103 },
	{ id: 4, username: "Diane", content: "Fullstack intéressant, projet SaaS = belle visibilité.", createdAt: new Date("2025-08-25T12:00:00"), announcementId: 104 },
	{ id: 5, username: "Ethan", content: "J’aime bien l’idée de travailler sur la qualité logicielle.", createdAt: new Date("2025-08-26T09:00:00"), announcementId: 105 },
	{ id: 6, username: "Fatima", content: "Freelance en data, le tarif me convient.", createdAt: new Date("2025-08-26T14:30:00"), announcementId: 106 },
	{ id: 7, username: "Greg", content: "Un stage mobile, c’est parfait pour progresser.", createdAt: new Date("2025-08-26T16:00:00"), announcementId: 107 },
	{ id: 8, username: "Hélène", content: "Lead backend, belle opportunité de carrière !", createdAt: new Date("2025-08-26T18:30:00"), announcementId: 108 },
	{ id: 9, username: "Ivan", content: "UX Senior ? J’ai 8 ans d’expérience, je postule.", createdAt: new Date("2025-08-27T10:00:00"), announcementId: 109 },
	{ id: 10, username: "Julia", content: "CDD pour un junior, intéressant pour démarrer.", createdAt: new Date("2025-08-27T13:15:00"), announcementId: 110 },
];
