import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cinepholieProject from "@/public/cinepholieProject.png";
import dzExpressProject from "@/public/dzExpressProject.png"
import madauraProject from "@/public/madauraProject.png";
import madlibsWonderTellerProject from "@/public/madlibsWonderTellerProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
      title: "Graduated Recoded bootcamp",
      location: "On line ",
      description:
          "I successfully completed a 5-month immersive coding bootcamp, dedicating over 400 hours to mastering JavaScript, ReactJS, next.js, HTML/CSS, Tailwind CSS, Bootstrap, and Git. Throughout the program, I co-created responsive web applications like Madaura, DzExpress, Cinepholie, and WonderTellers, demonstrating my ability to contribute effectively in dynamic development environments. You can explore the codebase and project details on my GitHub profile.",
      icon: React.createElement(LuGraduationCap),
      date: "2023",
    },
    {
      title: "Odoo Functional Support",
      location: "Algiers, Algeria",
      description:
          "As an Odoo Support Specialist, my role involved collaborating closely with integrators to ensure seamless integration of Odoo. I conducted hands-on training sessions for cross-functional teams of 3-5 members, equipping them with in-depth knowledge of Odoo functionalities. Additionally, I played a key role in facilitating a smooth transition to the new system, providing ongoing support to users throughout the transitional phase.",
      icon: React.createElement(CgWorkAlt),
      date: "2020 - 2022",
    },
    {
      title: "Administrative Assistant",
      location: "Algiers, Algeria",
      description:
        "As an administrative assistant, I efficiently managed office operations, including scheduling, correspondence, and maintaining organizational systems. I coordinated meetings, managed documents, and provided crucial support to ensure seamless day-to-day functioning, honing my organizational prowess and attention to detail.",
      icon: React.createElement(CgWorkAlt),
      date: "2018 - 2020",
    },
    {
        title: "Graduated Bs. Computer Sience",
        location: "Djelfa, Algeria",
        description:
        "I graduated after three years with a Computer Science degree provided in-depth learning in programming, algorithms, and software development. It equipped me with essential skills in data structures and system design, preparing me for the fast-paced tech landscape.",
        icon: React.createElement(LuGraduationCap),
        date: "2012 - 2015",
    },
        
] as const;

export const projectsData = [
    {
        title: "Madaura",
        description:
          "Madaura, leveraging the latest technologies, is a Progressive Web App (PWA) designed exclusively for students. It serves as a tailored platform facilitating the buying and borrowing of goods within student communities. Experience a seamless, user-friendly interface dedicated to simplifying transactions among students.",
        tags: ["React", "Next.js", "Supabase", "Tailwind", "next-intl", "Cloudinary", "Jest","Prettier", "Leaflet, firebase"],
        imageUrl: madauraProject,
      },
  {
    title: "DzExpress",
    description:
      "DzExpress revolutionizes e-commerce with cutting-edge technologies. This innovative platform, a robust CRUD application, redefines shopping in Algeria. Seamlessly shop for all your needs from anywhere within the country. Experience a user-centric, all-encompassing e-commerce solution tailored to Algerian consumers.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Prisma"],
    imageUrl: dzExpressProject,
  },
  {
    title: "Cinepholie",
    description:
      "Cinepholie is a dynamic web platform crafted using the latest technologies. It serves as a comprehensive hub for users to explore the latest movie news and actor updates. Experience a one-stop destination for discovering up-to-date information on films and actors within a sleek and user-friendly interface.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "TMDb API"],
    imageUrl: cinepholieProject,
  },
  {
    title: "SoftLib",
    description:
        "SoftLib is a web application that offers an interactive storytelling experience centered around the theme of ambition and its effects. Users engage with the narrative of a determined girl striving for societal impact, exploring how excessive focus can impact mental well-being. The app navigates this journey through interactive elements and prompts.",
    tags: ["HTML", "CSS", "JAvaScript"],
    imageUrl: madlibsWonderTellerProject,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Jest",
  "Tailwind",
  "Bootstrap",
  "Firebase",
  "Supabase",
  "Framer Motion",
] as const;