import { Typography } from "@material-tailwind/react";
import SectionHeading from "./SectionHeading";
import { BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";
import { contactLinks } from "../lib/data";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="lg:pt-20 p-10">
      <SectionHeading>Contact</SectionHeading>
      <motion.div
        className="flex justify-center flex-col items-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Typography className="max-w-screen-xl text-black text-lg lg:text-center">
          Thank you for visiting my website! I'm excited to connect with you.{" "}
          <br />
          Whether you have questions, feedback, or simply want to say hello, I'd
          love to hear from you. <br />
          Please feel free to reach out using the options below. I look forward
          to starting a conversation with you. <br /> Let's connect and explore
          the possibilities!
        </Typography>
        <div className="flex justify-center items-center lg:flex-row flex-col">
          <a
            className="cursor-pointer uppercase bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-lg outline-none scale-90 hover:bg-gray-950 hover:shadow-md hover:shadow-black active:scale-[0.87] transition"
            href={`mailto:${contactLinks.email}`}
          >
            Send an email
            <BiLogoGmail className="scale-125" />
          </a>
          <a
            className="cursor-pointer uppercase bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-lg outline-none scale-90 hover:bg-gray-950 hover:shadow-md hover:shadow-black active:scale-[0.87] transition"
            href={contactLinks.linkedIn}
            target="_blank"
          >
            Connect on LinkedIn
            <BiLogoLinkedinSquare className="scale-125" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
