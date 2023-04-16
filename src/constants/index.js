/** @format */

import {
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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  massage,
  MCW,
  brainStation,
  spotify
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
