import { Spline } from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { Experience, Projects, SocialLinks } from "./data";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center opacity-95 relative bg-primary ">
        <nav className=" w-full px-6 z-50 fixed inset-x-0 top-5 flex justify-center items-center opacity-95">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center opacity-95">
            <p className=" text-lg text-slate-200 font-semibold px-2 md:px-3">
              Alan Joy
            </p>

            <div className=" hidden md:flex items-center gap-6 ml-8 flex-1">
              <a
                href="#home"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#projects"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
              <a
                href="https://github.com/Alan-aj/portfolio-react-v1"
                target="_blank"
                rel="noreferrer"
                className=" ml-auto text-base text-textBase font-medium  hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                <IoLogoGithub className=" inline mr-2 mb-1" />
                Source
              </a>
            </div>
            <motion.div
              whileTap={{ scale: 0.5 }}
              className=" block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className=" text-2xl text-textBase"></IoMenu>
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1.1 }}
                exit={{ scale: 0.5 }}
                className=" p-4 py-5 w-190 bg-navBar rounded-lg fixed top-28 right-7 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="https://github.com/Alan-aj/portfolio-react-v1"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-base text-textBase font-medium  hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  <IoLogoGithub className=" inline mr-2 mb-1" />
                  Source
                </a>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="relative" id="home">
          {/* splime 3d */}
          <Spline scene="https://prod.spline.design/jNKv5TnRLrJnBjyT/scene.spline" />

          <div className=" absolute bottom-5 w-full justify-center items-center flex ">
            <div className=" shadow-md p-3 flex items-center justify-center bg-zinc-900 rounded-3xl opacity-80">
              <p className=" text-textBase">Press and drag to orbit</p>
            </div>
          </div>
        </div>

        {/* About section */}
        <section className="w-[100%] mt-0">
          <div
            className=" h-screen w- relative my-10 overflow-hidden"
            id="about"
          >
            <div className=" absolute w-96 h-96 backdrop-blur-sm bg-teal-100/30 rounded-full z-0 top-1/2 right-1/2"></div>
            <div className=" absolute w-72 h-72 backdrop-blur-sm bg-purple-300/30 rounded-full z-0 bottom-1/2 left-1/2"></div>
            <div className=" absolute w-16 h-16 backdrop-blur-sm bg-orange-200/30 rounded-full z-0 inset-y-2/4 inset-x-2/4"></div>

            <div className="absolute w-full h-screen backdrop-blur-sm"></div>
            <div className="w-10/12 md:w-3/6 2xl:w-2/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/30 rounded-lg md:p-10 p-10">
              <h1 className=" text-white font-semibold text-3xl mb-2">
                Hello..
              </h1>
              <p className="text-white text-xl mb-3 text-left">
                I'm Alan Joy. I am a student, undergraduate, developer and
                life-long learner. I love to play with code and explore new
                things. Scroll down to view more...🚀
              </p>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-4 inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   dark:text-white "
              >
                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900/30 rounded-md ">
                  My Portfolio
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Main section */}
        <main className="w-[80%] mt-5">
          {/* timeLine */}
          <section className=" w-full flex items-center justify-center overflow-hidden">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* projects */}
          <section
            className=" flex flex-wrap items-center justify-center my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.id}
                  className=" border border-zinc-800 rounded-md md:mx-1 p-2 px-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className=" text-mg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>
                  <a href={n.link} target="_blank" rel="noreferrer">
                    <img
                      src={n.imageSrc}
                      alt=""
                      className=" w-full h-full object-cover rounded-md my-2 mb-3"
                    />
                  </a>
                  <div className=" flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className=" text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
          {/* contact */}
          <section
            id="contact"
            className=" flex flex-col items-center justify-center w-full my-24"
          >
            <p className=" text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className=" flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    href={n.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" w-4/5 md:w-auto px-3 md:px-8 py-3 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className=" text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
        <div className="w-full bg-black p-5 items-center opacity-60">
          <footer className=" py-0">
            <div className=" w-full text-center text-sm text-textBase">
              <span>© 2022 </span>
              <a className=" font-semibold" href="#home">
                Alan Joy.
              </a>
              <span> All Rights Reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
