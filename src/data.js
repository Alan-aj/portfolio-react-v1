import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoRocket,
  IoColorPaletteSharp,
  IoPlanet,
  IoEarth,
  IoSchool,
  IoBook,
} from "react-icons/io5";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";

export const Experience = [
  {
    id: 1,
    date: "2000",
    iconsSrc: <IoRocket />,
    title: "Start my Journey",
    location: "",
    description: "Born in Kerala, India",
  },
  {
    id: 2,
    date: "2016 - 2017",
    iconsSrc: <IoColorPaletteSharp />,
    title: "School",
    location: "Holy Cross Convent School",
    description: "Completed my 10th",
  },
  {
    id: 3,
    date: "2017 - 2019",
    iconsSrc: <IoPlanet />,
    title: "Higher Secondary",
    location: "Subulussalam Higher Secondary School",
    description: "Completed my Plus Two",
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
    description: "😉",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Live Chat App",
    imageSrc: img1,
    techs: "React, NodeJs, Socket.io, Heroku",
    github: "https://github.com/Alan-aj/chat-app",
    link: "https://chat-joy.netlify.app/",
  },
  {
    id: 2,
    name: "Music Player App ",
    imageSrc: img2,
    techs: "Django, React, Spotify API, Heroku",
    github: "https://github.com/Alan-aj/django-react-spotify",
    link: "https://aj-music.herokuapp.com",
  },
  {
    id: 3,
    name: "Modern Todo App",
    imageSrc: img3,
    techs: "React, React Hooks, Javascript",
    github: "https://github.com/Alan-aj/react_todo_app",
    link: "https://todo-zone.netlify.app/",
  },
  {
    id: 4,
    name: "Web Calculator App",
    imageSrc: img4,
    techs: "React, HTML, CSS, Netlify",
    github: "https://github.com/Alan-aj/react_calculator",
    link: "https://pro-calculator.netlify.app/",
  },
  {
    id: 5,
    name: "Snake Game",
    imageSrc: img5,
    techs: "Javascript, HTML, CSS",
    github: "https://github.com/Alan-aj/snake_game_js",
    link: "https://snake-aj.netlify.app/",
  },
  {
    id: 6,
    name: "Weather App",
    imageSrc: img6,
    techs: "React, Weather API, Tailwind CSS",
    github: "https://github.com/Alan-aj/react_weather_app",
    link: "https://speed-weather.netlify.app/",
  },
  {
    id: 7,
    name: "Cryptocurrency App",
    imageSrc: img7,
    techs: "React, Javascript, CSS, Netlify",
    github: "https://github.com/Alan-aj/crypto-price-app",
    link: "https://crypto-online.netlify.app/",
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
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alan-aj",
  },
  {
    id: 3,
    iconSrc: <IoBook className="text-orange-500 text-3xl cursor-pointer" />,
    name: "My Blog",
    link: "https://alanban.blogspot.com",
  },
];
