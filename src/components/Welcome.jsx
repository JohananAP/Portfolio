import { Typography } from "@material-tailwind/react";
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { motion } from "framer-motion";
import { contactLinks } from "../lib/data";
import PicMe from "../assets/images/picme.png";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="lg:pt-56 lg:pb-48 flex justify-center items-center p-10 "
    >
      <div className="flex  justify-center items-center max-w-7xl lg:flex-row flex-col gap-4">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:h-full h-40"
          src={PicMe}
          alt="nature image"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:pl-40"
        >
          <Typography className="text-lg lg:text-xl flex text-start text-blue-gray-800">
            Hey! My name is
          </Typography>
          <Typography className=" text-4xl lg:text-6xl flex text-start text-black">
            Johanan Abhishek
          </Typography>
          <Typography className=" text-2xl lg:text-3xl text-start text-blue-gray-800">
            You can call me{" "}
            <span className="text-light-blue-700">Johanan (Jo-hah-nun) </span>
          </Typography>
          <Typography className=" text-xl lg:text-2xl text-start text-blue-gray-800">
            I'm a{" "}
            <span className="text-light-blue-700">Software Developer</span> with
            experience in{" "}
            <span className="text-light-blue-700">
              Backend development and Data Engineering
            </span>
            .
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className=" text-2xl lg:text-3xl flex gap-4 py-3 text-blue-gray-800 dark:text-gray-400 text-start"
          >
            <a href={`mailto:${contactLinks.email}`}>
              <BiLogoGmail className="cursor-pointer hover:text-black hover:scale-125 active:scale-110 transition" />
            </a>
            <a href={contactLinks.linkedIn} target="_blank">
              <BiLogoLinkedin className="cursor-pointer hover:text-black hover:scale-125 active:scale-110 transition" />
            </a>
            <a href={contactLinks.linkedIn} target="_blank">
              <BiLogoGithub className="cursor-pointer hover:text-black hover:scale-125 active:scale-110 transition" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
