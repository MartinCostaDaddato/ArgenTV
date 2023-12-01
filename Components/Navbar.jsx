"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="p-8 bg-black border-b  border-stone-800 w-full "
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <ul className="flex w-full gap-10 justify-evenly items-center text-white underline-offset-8">
        <Link href={"/"}>
          <li className="hover:underline">Inicio</li>
        </Link>
        <Link href={"/soporte"}>
          <li className="hover:underline">Soporte</li>
        </Link>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
