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
  podify,
  ara,
  karim
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
    title: "Vegan Activist",
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
    title: "Software Engineer Bootcamp",
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
    title: "24 Hour Hackathon",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#E6DEDD",
    date: "Apr 2023",
    points: [
      "Collaborated with designers, product managers, data scientists and other developers to create high-quality products.",
      "Developed a backend solutions to improve Sptofy's listerner and creator experiences.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Owner & Therapist",
    company_name: "Independent Massage Practices",
    icon: massage,
    iconBg: "#fff",
    date: "Jan 2011 - 2020",
    points: [
      "Facilitated lasting pain relief for 20 clients a day in a small chiropractic office by effectively identifying and treating client’s concerns, adhering to precise schedules and sharing impeccable communication with the Doctor and his clients",
      "Supported significant and lasting pain relief for several thousands diverse clients over 12 years by utilizing empathetic listening, therapeutic intents and precise deep tissue massage techniques",
      "Started and grew four separate wellness companies as a sole proprietor by successfully managing scheduling, marketing and clients needs to improve their experience",
    ],
  },
  {
    title: "Vegan Activist",
    company_name: "Anonymous For The Voiceless, Animal Defense League, Peta, Animal Actvism Mentorship, Connect For Animals",
    icon: ara,
    iconBg: "#fff",
    date: "Jul 2018 - Present",
    points: [
      "3 years experience demonstrating, outreaching and speaking to hundreds of people with 6 animal rights organizations",
"Delivered 3 separate keynote presentations for the Vegetarian Society",
"Mentored 5 vegans to increase their animal rights activism as mentor for AAM and coached several  people to be vegan"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Great work! I was truly so impressed by your contributions! Hope you feel as proud and satisfied as you deserve. ",
    name: "Patrick McCullough",
    designation: "Lead Educator",
    company: "Brain Station",
    image:
      "https://media.licdn.com/dms/image/C5603AQEMWG9AYvW-Uw/profile-displayphoto-shrink_200_200/0/1620741404815?e=1687392000&v=beta&t=0jGuuyfTIRT8yV5KTOtrDCxXG_ediXx3fpjMZBY_ba8",
  },
  {
    testimonial:
      "I have been consistently impressed by Mr. Koenigsberg's attitue towards his work and performance on the job. He is conscientious and goal oriented employee with a true interest in helping others. He demonstates professionalism and compassion. He is punctial and reliable.",
    name: "Dr. Karim Habayeb",
    designation: "Chiropractic Physician",
    company: "Miami Chiropractic and Wellness",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFGg5xN3fSlyg/profile-displayphoto-shrink_800_800/0/1517365745687?e=1687392000&v=beta&t=TpvPLELulVu5_Rh2LF6FIMhHBeN44e7Az12B6zh201U",
  },

  {
    testimonial:
      "Benjahmin is a fantastic therapist.  He is kind and considerate, and easily adjusts his technique based on how you are feeling.  His deep tissue is OUTSTANDING.   He intuitively pays attention to what your muscles need at that particular moment. ",
    name: "David Moss",
    designation: "Director of Sourcing, Product Development and Sustainability",
    company: "TomboyX",
    image:
      "https://media.licdn.com/dms/image/C5603AQEsX8qAI96AKQ/profile-displayphoto-shrink_800_800/0/1599606669910?e=1687392000&v=beta&t=7RMKuFL6mRhJTqFMOMJFgm6AtJZV0k54ju872yMTs6M",
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
