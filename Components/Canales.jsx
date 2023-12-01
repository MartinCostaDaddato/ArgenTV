"use client";

import Image from "next/image";
import Link from "next/link";
import { Canales } from "@/app/canales";
import { useState } from "react";
import { motion } from "react-magic-motion";

function CanalesCard() {
  const filtros = ["Todos", "Television", "Radio"];
  const [isOpen, setIsOpen] = useState(false);
  const [listaCanales, setCanales] = useState(Canales);

  const handleClick = (filtro) => {
    if (filtro === "Todos") {
      let newarray = [...Canales];
      newarray.sort(() => Math.random() - 0.5);
      setCanales(newarray);
    } else {
      setCanales(Canales.filter((canal) => canal.medio === filtro));
    }
  };

  return (
    <section className="container flex flex-col justify-center ">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className=" flex flex-col  items-center mb-8 text-white "
      >
        <motion.button
          layout
          className=" font-bold "
          onClick={() => setIsOpen(!isOpen)}
        >
          Filtros
        </motion.button>
        {isOpen && (
          <div className="gap-4 p-4 flex items-center justify-between underline-offset-8 ">
            {filtros.map((filtro) => (
              <motion.button
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                key={filtro}
                className="focus:underline"
                onClick={() => handleClick(filtro)}
              >
                {filtro}
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
      <motion.div
        layout="position"
        className="flex justify-center gap-4 xl:gap-8  flex-wrap"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {listaCanales.map((canal) => (
          <Link
            href={`/canal/${canal.id}`}
            key={canal.urlCanal}
            className="drop-shadow-xl border border-black hover:scale-105 ease-in duration-150 cursor-pointer w-[370px] hover:border-b-slate-500 rounded-xl hover:rounded-b-none bg-zinc-900"
          >
            <Image
              className=" object-cover w-full rounded-t-xl h-44 bg-white"
              src={canal.bannerCanal}
              alt={canal.nombreCanal}
            />
            <div className="flex text-center p-4 gap-4 items-center ">
              <Image
                className="rounded-full w-10 h-10 object-cover"
                src={canal.logoCanal}
                alt={canal.logoCanal}
              />
              <p className="text-white">{canal.nombreCanal}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default CanalesCard;
