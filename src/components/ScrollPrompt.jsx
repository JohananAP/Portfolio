import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function ScrollPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Typography variant="paragraph" className="text-gray-500">
        Scroll down for more
      </Typography>
    </motion.div>
  );
}
