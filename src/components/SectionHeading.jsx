import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function SectionHeading({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Typography variant="h2" className="block lg:hidden p-8">
        {children}
      </Typography>
      <Typography variant="h1" className="hidden lg:block p-10">
        {children}
      </Typography>
    </motion.div>
  );
}
