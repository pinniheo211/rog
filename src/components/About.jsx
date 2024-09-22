import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkArrow } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello everyone! This website was created by{" "}
        <span className="text-white font-semibold">
          Pham Quoc Hung (BABAWE22370)
        </span>
        , a Business Administration student, as part of an assignment for an
        E-Commerce course at university. I chose{" "}
        <span className="text-white font-semibold">
          the ROG Zephyrus G16 (2024) GU605
        </span>{" "}
        gaming laptop as the main product for this project because I am very
        interested in technology and am also a gamer.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Today, I’m excited to introduce you to a gaming laptop that I’m sure
        will impress you from the very first look – the{" "}
        <span className="text-white font-semibold">
          ROG Zephyrus G16 (2024) GU605
        </span>
        . It’s the perfect blend of{" "}
        <span className="text-white font-semibold">powerful performance</span>{" "}
        and <span className="text-white font-semibold">sleek design</span>.
      </motion.p>
      {/* <div className="mt-5 flex cursor-pointer" onClick={onButtonClick}>
        Resume{" "}
        <img
          src={linkArrow}
          height={20}
          width={20}
          className="ml-2"
          alt="arrow"
        />
      </div> */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
