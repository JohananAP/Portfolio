import { motion } from "framer-motion";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Carousel,
  Chip,
  Typography,
} from "@material-tailwind/react";
import SectionHeading from "./SectionHeading";
import { recentTech } from "../lib/data";
import { Icon } from "../lib/utils";

function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 py-4 lg:px-80"
    >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Me</AccordionHeader>
        <AccordionBody className="flex lg:flex-row lg:gap-10 flex-col gap-4 items-center">
          <img
            className="flex-none rounded-xl lg:h-full lg:w-[25rem] h-64"
            src="content\images\suit.jpg"
            alt="nature image"
          />
          <div className="flex flex-col">
            <Typography className="text-black text-xl">
              A Jack of all trades, master of none!
              <br />
              If there's anything that I've learnt from my experience, it is to
              be more flexible and versatile. In recent years, collaborating
              with various organizations and tackling diverse projects has
              constantly pushed me to acquire new skills and technologies and
              delve into deeper expertise when the situation demands.
              <br />
              <br />
              Technologies I've been recently working with:
            </Typography>
            <div className="flex gap-2 flex-wrap mt-2">
              {recentTech.map((tech) => (
                <Chip
                  key={tech}
                  variant="ghost"
                  value={tech}
                  className="rounded-full text-sm"
                />
              ))}
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          A Personal Touch
        </AccordionHeader>
        <AccordionBody className="flex lg:flex-row lg:gap-10 flex-col gap-4 items-center">
          <Carousel
            autoplay={true}
            loop={true}
            autoplayDelay={5000}
            className="flex-none rounded-xl lg:h-[35rem] lg:w-[25rem] h-64"
          >
            <img
              src="content\images\guitar.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="content\images\kayak.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </Carousel>
          <div className="flex flex-col">
            <Typography variant="lead" className="text-black">
              You probably already know I like to code, but beyond that, I have
              a deep love for music. I volunteer at my church playing guitar and
              occasionally piano when needed. I also find joy in activities such
              as leisurely walks, cooking, video gaming, table tennis, and
              various outdoor activities. One recent interest I've embraced is
              kayaking!
            </Typography>
            <br />
            <Typography variant="small" className="text-gray-500">
              In case you're wondering, the image on the welcome page is
              designed in the shape of a guitar plectrum.
            </Typography>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>Vision</AccordionHeader>
        <AccordionBody>
          <Typography variant="lead" className="text-black">
            Data holds significant value in today's world, and its importance is
            destined to grow even further in the future. I'm eager to develop or
            contribute to a product that prioritizes data security as its core
            feature, ensuring the protection of data on the internet.
            Additionally, I have an interest in developing or contributing to
            products related to the fields of music and automobiles.
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Education
        </AccordionHeader>
        <AccordionBody className="flex lg:flex-row lg:gap-10 flex-col gap-4 items-center">
          <img
            className="flex-none rounded-xl lg:h-72 lg:w-[25rem] h-64"
            src="content\images\graduation.png"
            alt="nature image"
          />
          <div className="flex flex-col">
            <Typography variant="lead" className="text-black">
              Master of Applied Computer Science, Dalhousie University
              <br />
              January 2021 - April 2022
            </Typography>
          </div>
        </AccordionBody>
      </Accordion>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="lg:pt-20 p-10">
      <SectionHeading>About</SectionHeading>
      <AccordionCustomIcon />
    </section>
  );
}
