import santex from "../assets/santex.jpg";
import egg from "../assets/Egg.jpg";
import workingOn from "../assets/work.jpg";


export const EXPERIENCES = [
  {
    year: "2023 - Presente",
    role: "Full-Stack",
    company: "Freelancer",
    description: `Freelancer especializado en el desarrollo de aplicaciones Web y la mejora de la experiencia de usuario. Utilizo frameworks y prácticas de vanguardia para crear soluciones escalables y altamente funcionales.`,
    technologies: ["Javascript", "React.js", "Next.js", "MySQL", "Angular", "TailwindCSS"],
  },
  {
    year: "2022 - 2023",
    role: "Full-Stack",
    company: "Santex",
    description: `Participé en una simulación laboral impulsada por la empresa Santex (Technology with Purpose Foundation), donde trabajé en un equipo de 6 integrantes. Me enfoqué en seleccionar el modelo MVP, estructurando la App y desarrollando gran parte de la lógica vinculada con el Back-End, contribuyendo así al cumplimiento exitoso de las metas establecidas.`,
    technologies: ["Typescript", "Angular", "Bootstrap", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Front-End",
    company: "Ad-Honorem",
    description: `Me especialicé en diseñar una aplicación estructurada para personas con TEA, enfocándome en tonos amigables y una disposición cuidadosa. Además, llevé a cabo análisis de datos para seleccionar la información más válida y precisa para la App.`,
    technologies: ["HTML", "CSS", "Angular", "Javascript"],
  },
];

export const PROJECTS = [
  {
    image: santex,
    title: "Dev",
    description:
      "En Santex, desarrollé habilidades de comunicación efectiva a través del trabajo en equipo. Superar el desafío de simulación laboral me introdujo al mundo del desarrollo y me preparó para esta trayectoria.",
    technologies: ["HTML", "CSS", "Git", "Node.js", "Angular", "MySQL", "Docker", "SCRUM"],
  },
  {
    image: egg,
    title: "Web Full-Stack",
    description:
      "En Egg , adquirí conceptos teóricos clave para el desarrollo de software y aprendí a resolver desafíos prácticos mediante múltiples soluciones y buenas prácticas de estructuración.",
    technologies: ["HTML", "CSS", "Spring Framework", "Java", "PostgreSQL", "Auth"],
  },
  {
    image: workingOn,
    title: "Wallet-Coins",
    description:
      "Aplicación que simula una wallet similar a la de PayPal, con la posibilidad de poder intercambiar por divisas y cryptos, calculadora de cambio y un seguimiento de gastos y ganancias.",
    technologies: ["React", "TailwindCSS", "PlanetScale", "Vercel", "Prisma", "NodeJS"],
  },
];
