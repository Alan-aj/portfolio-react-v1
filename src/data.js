import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoRocket,
  IoColorPaletteSharp,
  IoEaselSharp,
  IoEarth,
  IoSchool
} from "react-icons/io5";
import img1 from "./images/img1.png"

export const Experience = [
  {
    id: 1,
    date: "2000",
    iconsSrc: <IoRocket />,
    title: "Start my Journey",
    location: "",
    description:
      "Born in Kerala, India",
  },
  {
    id: 2,
    date: "2016 - 2017",
    iconsSrc: <IoColorPaletteSharp />,
    title: "School",
    location: "Holy Cross Convent School",
    description:
      "Completed my 10th",
  },
  {
    id: 3,
    date: "2017 - 2019",
    iconsSrc: <IoEaselSharp />,
    title: "Higher Secondary",
    location: "Subulussalam Higher Secondary School",
    description:
      "Completed my Plus Two",
  },
  {
    id: 4,
    date: "2019 - 2022",
    iconsSrc: <IoSchool />,
    title: "College",
    location: "St. Joseph's College Devadiri, Kozhikode",
    description:
      "Completed my Bsc Computer Science degree from Calicut University",
  },
  {
    id: 5,
    date: "2022 - Present",
    iconsSrc: <IoEarth />,
    title: "Loading..",
    location: "",
    description:
      "😉",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Full Stack Music Player App ",
    imageSrc: img1,
    techs: "Django, React, Spotify API, Heroku",
    github: "https://github.com/Alan-aj/django-react-spotify",
  },
  {
    id: 2,
    name: "Modern Todo App",
    imageSrc: img1,
    techs: "React, React Hooks, Javascript",
    github: "https://github.com/Alan-aj/react_todo_app",
  },
  {
    id: 3,
    name: "Cryptocurrency App",
    imageSrc: img1,
    techs: "React, Javascript, CSS, Netlify",
    github: "https://github.com/Alan-aj/crypto-price-app",
  },
  {
    id: 4,
    name: "Web Calculator App",
    imageSrc: img1,
    techs: "React, HTML, CSS, Netlify",
    github: "https://github.com/Alan-aj/react_calculator",
  },
  {
    id: 5,
    name: "My Blog Website",
    imageSrc: img1,
    techs: "Blogger, Javascript, HTML, CSS",
    github: "#",
  },
  {
    id: 6,
    name: "Weather App",
    imageSrc: img1,
    techs: "React, Weather API, Tailwind CSS",
    github: "https://github.com/Alan-aj/react_weather_app",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Alan-aj",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alan-aj",
  },
  {
    id: 2,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
];
