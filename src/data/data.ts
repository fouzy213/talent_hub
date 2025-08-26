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
// Annonces exemple
// -----------------------------

export const announcements: Announcement[] = [
	{
		id: 101,
		title: "Développeur Frontend React",
		description:
			"Nous recherchons un développeur frontend pour renforcer notre équipe sur un projet e-commerce.",
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
		description:
			"Mission freelance pour optimiser les performances et la sécurité des bases PostgreSQL.",
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
		description:
			"Stage de 6 mois pour travailler sur la refonte d'une application mobile.",
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
];

// -----------------------------
// Commentaires sur annonces
// -----------------------------

export const announcementComments: AnnouncementComment[] = [
	{
		id: 1,
		username: "Alice",
		content: "Super opportunité pour les développeurs frontend !",
		createdAt: new Date("2025-08-24T19:00:00"),
		announcementId: 101,
	},
	{
		id: 2,
		username: "Bob",
		content: "Le tarif freelance est correct, je vais postuler.",
		createdAt: new Date("2025-08-24T19:15:00"),
		announcementId: 102,
	},
	{
		id: 3,
		username: "Charlie",
		content: "Parfait pour un stage, bonne expérience en perspective.",
		createdAt: new Date("2025-08-24T20:00:00"),
		announcementId: 103,
	},
];
