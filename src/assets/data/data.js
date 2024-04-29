import fashionStore from "../../assets/portfolio/f.png";
import weather from "../../assets/portfolio/w.png";
import sushi from "../../assets/portfolio/s1.png";
import swb from "../../assets/portfolio/swb.png";
import fitnessApp from "../../assets/portfolio/fitnessApp.png";

import sacha from "../testimonials/Sacha.webp";
import olena from "../testimonials/Olena.webp";
import samuel from "../testimonials/samuel-_1_.webp";

export const services = [
  {
    name: "frontend development",
    title: "websites development",
    description:
      "I create eye-catching, functional and responsive interfaces for different types of sites.",
  },
  {
    name: "mentoring",
    title: "html, css, js, react",
    description:
      "I assist beginners in building websites by providing mentorship and guidance, ensuring they gain the necessary skills and knowledge. ",
  },
  {
    name: "mentoring",
    title: "english language",
    description:
      " I provide support for individuals looking to enhance their English language skills, guiding them through the learning process for effective communication. ",
  },
  {
    name: "mentoring",
    title: "bug fixing",
    description:
      "I guide newcomers at the SheCodes School in identifying and resolving bugs.",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    percentage: 95,
    description:
      "I have extensive experience in crafting the structure of web pages using HTML. My expertise includes developing clean and semantically sound code, providing an efficient foundation for web projects.",
  },
  {
    id: 2,
    name: "CSS",
    percentage: 95,
    description:
      "I possess proficiency in styling web pages using CSS. My approach to layout ensures not only an aesthetic design but also usability, creating a pleasing user experience.",
  },
  {
    id: 3,
    name: "JavaScript",
    percentage: 90,
    description:
      "I master JavaScript to create dynamic websites, developing client-side scripts for enhanced functionality and user experience.Proficient in client-side script development.",
  },
  {
    id: 4,
    name: "React",
    percentage: 90,
    description:
      "I excel in React with hands-on experience crafting dynamic and interactive user interfaces. My expertise covers state management, component lifecycle, and seamless integration of external APIs for robust websites ",
  },
  {
    id: 5,
    name: "Git",
    percentage: 80,
    description:
      "I'm proficient in Git for version control, enabling collaborative development and streamlined code management. I have experience creating/merging branches, resolving conflicts, ensuring smooth workflows in individual and team projects.",
  },
  {
    id: 6,
    name: "FIGMA",
    percentage: 95,
    description:
      "My proficiency in Figma extends beyond design appreciation to practical implementation in the development workflow. I leverage Figma to extracting design assets, and ensuring a smooth translation of visual concepts into code.",
  },
];

export const projects = [
  {
    id: 0,
    img: fitnessApp,
    category: "food",
    title: "Fitness App",
    link: "https://fitness-app-psi-lemon.vercel.app/",
    description:
      "Successfully combining my React expertise with API integration.I integrated two APIs: one for fetching exercises and another for displaying related workout videos from YouTube. Users can open an extra page and see detailed information about each of exercise.",
  },
  {
    id: 1,
    img: sushi,
    category: "food",
    title: "Sushi resturant",
    link: "https://sushi-restaurant1.vercel.app/",
    description:
      "Successfully combining my React expertise with API integration, I've crafted a dynamic website for Sushi Restaurant. Leveraging advanced techniques, including Axios and other methodologies, I seamlessly incorporated API functionalities to enhance the user experience. ",
  },
  {
    id: 2,
    img: swb,
    category: "collaborative",
    title: "Car repair",
    link: "http://swbservis.s3-website.eu-central-1.amazonaws.com/?#",
    description:
      "This site is created with the help of react.You can sign up for high-quality car repairs.There is also a language switching function so that it is available to customers who do not know Ukrainian.",
  },
  {
    id: 3,
    img: fashionStore,
    category: "fashion",
    title: "Fashion store",
    link: "https://olena-olkhovyk.github.io/Fashion-store/index.html",
    description:
      "Expanding my portfolio, I delved into the realm of fashion with the creation of a stylish online menswear store. Meticulously developed using HTML, CSS, and JavaScript, the site seamlessly integrates adaptive design for a flawless experience across devices.",
  },
  {
    id: 4,
    img: weather,
    category: "weather",
    title: "Weather",
    link: "https://olena-olkhovyk.github.io/Weather-project/",
    description:
      "I designed and implemented a weather website. Developed with HTML, CSS, and JavaScript, this site seamlessly integrates weather APIs to deliver accurate and up-to-date forecasts. The user-friendly interface allows visitors to effortlessly check current conditions. ",
  },
];

export const cv = [
  {
    id: 0,
    title: "SheCodes",
    subtitle: "Front-end Developer",
    date: "2022-2023",
    description: "",
    category: "education",
  },
  {
    id: 1,
    title: "Pedagogical Academy",
    subtitle: "Primary School and English Teacher",
    date: "2015-2021",
    description: "",
    category: "education",
  },
  {
    id: 2,
    title: "Red Rocket Software",
    subtitle: "Software Engineer",
    date: "2023-present",
    description: "",
    category: "experiance",
  },
  {
    id: 3,
    title: "PrivatBank",
    subtitle: "Customer Care Representative",
    date: "2019-2022",
    description: "",
    category: "experiance",
  },
];

export const testimonials = [
  {
    id: 0,
    name: "Olena Voloshina",
    img: olena,
    author: "DIRECTOR, CUSTOMER SERVICE DEPARTMENT PRIVAT BANK",
    description:
      "As the director of Privat Bank's customer Service department, Olena proved to me her initiative-oriented prowess. She coped successfully with her official duties and also has good business communication skills. Olena has a high working capacity, strongly supports the work of the company in difficult moments, even outside working hours.In the team, she expressed her point of view and took the initiative to help team members adapt to the team.",
  },
  {
    id: 1,
    name: "Oleksandr Chelombitko",
    img: sacha,
    author: "PRIVATBANK SUPERVISOR",
    description:
      "During the period of long-term work with Olena, I can only give positive feedback. She was always responsible and proactive. Olena was never afraid of new challenges and changes. She always tries her possible best to find solutions quickly and efficiently. In her team, she has established herself as a leader both in work processes and in the life of the team. She has organizational and initiative-oriented skills.",
  },
  {
    id: 2,
    name: "Samuel Anderson",
    img: samuel,
    author: "FULLSTACK DEVELOPER",
    description:
      "I have known Olena Olkhovyk for nearly two years. She is a synonym for punctuality and very responsible, especially in her professional world. Her passion and desire to build websites inspired me to be the software engineer that I have become. She is a goalgetter and will never give up on anything no matter how minute it is.",
  },
  {
    id: 3,
    name: "Samuel Anderson",
    img: samuel,
    author: "FULLSTACK DEVELOPER",
    description:
      "I have known Olena Olkhovyk for nearly two years. She is a synonym for punctuality and very responsible, especially in her professional world. Her passion and desire to build websites inspired me to be the software engineer that I have become. She is a goalgetter and will never give up on anything no matter how minute it is.",
  },
  {
    id: 2,
    name: "Samuel Anderson",
    img: samuel,
    author: "FULLSTACK DEVELOPER",
    description:
      "I have known Olena Olkhovyk for nearly two years. She is a synonym for punctuality and very responsible, especially in her professional world. Her passion and desire to build websites inspired me to be the software engineer that I have become. She is a goalgetter and will never give up on anything no matter how minute it is.",
  },
];

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
