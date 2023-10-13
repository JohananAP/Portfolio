import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { BWLogo } from "../lib/utils";

const sections = [
  {
    name: "Home",
    hash: "#welcome",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {sections.map((section, i) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal hover:text-black hover:font-bold"
          onClick={() => {
            setOpenNav(false);
          }}
          key={`/${section}-/${i}`}
        >
          <a href={section.hash} className="flex items-center">
            {section.name}
          </a>
        </Typography>
      ))}
    </ul>
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <motion.div
      className="sticky top-0 z-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Navbar className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4 border-white/10">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <a href="." className="hover:scale-125 focus:scale-110 transition">
            <BWLogo />
          </a>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex gap-4 items-center">
            <Button variant="gradient" size="sm" className="lg:inline-block">
              <span>RESUME</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </motion.div>
  );
}
