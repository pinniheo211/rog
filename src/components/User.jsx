import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import videoLaptop from "../assets/design.mp4";
import mainBoard from "../assets/mainBoard.webp";
import keyboard from "../assets/keyboard.webp";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-5 cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const User = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>User Experience</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Sound</h3>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Dolby Atmos sound system for immersive audio
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Keyboard</h3>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            RGB backlit keyboard with excellent tactile feedback, designed for
            gamers.
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Connectivity</h3>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Full suite of ports, including USB Type-C, Thunderbolt 4, HDMI 2.1,
            and RJ45 LAN.
          </motion.p>
        </div>
      </div>

      {/* <video
        className="w-full rounded-t-[20px] xl:rounded-t-[40px] mt-10"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src={videoLaptop} type="video/mp4" />
      </video> */}
      <img
        src={keyboard}
        alt="mainboard"
        className="w-full h-full mt-10 rounded-lg"
      />
      {/* <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(User, "");
