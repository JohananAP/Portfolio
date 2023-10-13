import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { BiLogoGithub } from "react-icons/bi";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { projects } from "../lib/data";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function ProjectCards() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    console.log(value);
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 lg:px-48">
      {projects.map((project, index) => (
        <motion.div
          className="flex"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          key={`/${project}-/${index}`}
        >
          <Card className="lg:w-96 w-[.85] justify-between">
            <CardBody>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="h6" className="block lg:hidden text-black">
                  {project.name}
                </Typography>
                <Typography variant="h5" className="hidden lg:block text-black">
                  {project.name}
                </Typography>
                <Chip
                  variant="ghost"
                  value={project.type}
                  className="rounded-full"
                />
              </div>
              <Typography>{project.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex gap-3 flex-col">
              <div className=" mt-2 flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <Chip
                    variant="ghost"
                    key={`/${project}-/${tech}-/${index}`}
                    value={tech}
                    className=" flex rounded-full"
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {project.readmore.trim() !== "" && (
                  <a href={project.readmore} target="_blank">
                    <Button>Read More</Button>
                  </a>
                )}
                {project.tryme.trim() !== "" && <Button>TRY ME!</Button>}
                <a
                  href={project.link}
                  target="_blank"
                  className="text-gray-900"
                >
                  <BiLogoGithub
                    size={40}
                    className="cursor-pointer hover:text-black hover:scale-125 active:scale-110 transition"
                  />
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="lg:pt-20 p-10">
      <SectionHeading>Projects</SectionHeading>
      <ProjectCards />
    </section>
  );
}
