"use client";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="flex justify-center flex-col items-center h-[60vh] text-center"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <h1 className="flex text-7xl font-bold bg-gradient-to-t from-cyan-500  to-white bg-clip-text text-transparent p-2">
        Argen
        <p className="bg-gradient-to-t from-yellow-300 to-white bg-clip-text text-transparent">
          TV
        </p>
      </h1>
      <h2 className="text-2xl font-medium text-white mx-4">
        La única grilla de streaming de los medios Argentinos
      </h2>
    </motion.section>
  );
}

export default Hero;
