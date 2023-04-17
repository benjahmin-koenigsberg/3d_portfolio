/** @format */

import {
  team,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mySql,
  sass,
  docker,
  meta,
  starbucks,
  tesla,
  spotify,
  redditBot,
  iwarehouse,
  carrent,
  jobit,
  tripguide,
  threejs,
  massage,
  MCW,
  brainStation,
  podify
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Team Player",
    icon: team,
  },
  {
    title: "Animal Rights Activist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "My SQL",
    icon: mySql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Brain Station",
    icon: brainStation,
    iconBg: "#fff",
    date: "Jan 2023 - April 2023",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Javascript and Application Programming Interfaces (APIs)",
      "React.js and Writing Efficient React Code",
      "Node.JS and Express and building REST API web servers",
      "MySGL and rational databases",
      "Efficnet and quality deployment operations",
      "Agile methodologies for collaborative development and pair programming",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#E6DEDD",
    date: "Apr 2023",
    points: [
      "Collaborated designers, product managers, data scientists and other developers to create high-quality products.",
      "Developed a backend solutions to improve Sptofy's listerner and creator experiences.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Therapist",
    company_name: "Miami Chiropractic and Wellness",
    icon: MCW,
    iconBg: "#383E56",
    date: "Aug 2021 - Aug 2022,",
    points: [
      "Increased office revenue and clients by doubling the amount of bookings for deep tissue treatments by applying the optimal amount of pressure and working on client’s main areas of concern",
      "Facilitated lasting pain relief for 20 clients a day in a small chiropractic office by effectively identifying and treating client’s concerns, adhering to precise schedules and sharing impeccable communication with the Doctor and his clients",
    ],
  },
  {
    title: "Owner & Therapist",
    company_name: "Independent Massage Practices",
    icon: massage,
    iconBg: "#fff",
    date: "Jan 2011 - 2020",
    points: [
      "Supported significant and lasting pain relief for several thousands diverse clients over 12 years by utilizing empathetic listening, therapeutic intents and precise deep tissue massage techniques",
      "Started and grew four separate wellness companies as a sole proprietor by successfully managing scheduling, marketing and clients needs to improve their experience",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vegan Reddit Bot",
    description:
      "The vegan reddit troll bot is a full stack application that can monitor incoming posts for specified keywords about animal consumption and auto respond with facts about non human animal sentience and personhood",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "snoostorm",
        color: "pink-text-gradient",
      },
    ],
    image: redditBot,
    source_code_link: "https://github.com/vegan-coder",
  },
  {
    name: "iWarehouse",
    description:
      "Full stack CRUD web application to manage seperate warehouses and their inventories. Worked within a team utiliting agiile and scrum methods and git flow",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "pink-text-gradient",
      },
      {
        name: "knex.js",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: iwarehouse,
    source_code_link: "https://github.com/vgean-coder",
  },
  {
    name: "SoundBites",
    description:
      "Worked with UI.UX designers, data scientes and other developers for a 24 hour Spotify sponsored hackathon. A new feature, allowing users to share sound bites of their favorite podcasts and use NLP on the collected soundbites to track trends in keywords.  ",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "knexjs",
        color: "pink-text-gradient",
      },
    ],
    image: podify,
    source_code_link: "https://github.com/vegan-coder",
  },
];

export { services, technologies, experiences, testimonials, projects };
