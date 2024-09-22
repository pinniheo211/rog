import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  technopartner,
  threejs,
  netflix,
} from "../assets";
import lab1 from "../assets/lap1.png";
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
    title: "Facebook",
    icon: web,
  },
  {
    title: "Instagram",
    icon: mobile,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Technopartner",
    icon: technopartner,
    iconBg: "#FFF",
    date: "Aug 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and React Native.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Create a React web application that can be converted into a native mobile app using Capacitor technology. This allows for faster application processing and can be managed with a single codebase.",
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
    name: "Laptop ASUS ROG Zephyrus G16",
    description:
      "Powered by an Intel Core i9 processor and an NVIDIA RTX 4080 GPU, this laptop can handle anything you throw at it. Whether you’re gaming on AAA titles or doing complex graphic work, the Zephyrus G16 delivers smooth and flawless performance. The 16-inch QHD display with a 165Hz refresh rate brings ultra-crisp visuals and fast response times, immersing you fully in every gaming experience.",
    tags: [
      {
        name: "Intel Core i9",
        color: "blue-text-gradient",
      },
      {
        name: "NVIDIA RTX 4080 GPU",
        color: "green-text-gradient",
      },
    ],
    image: lab1,
    link: "https://netflix-next-mui-git-master-fadhilahdwiananda.vercel.app/",
    source_code_link: "https://github.com/fadhildwia",
  },
];

export { services, technologies, experiences, testimonials, projects };
