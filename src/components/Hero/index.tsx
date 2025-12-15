import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import illustrator from "../../assets/illustrator.png";

import photoshop from "../../assets/photoshop.png";

import miro from "../../assets/miro.png";

import notion from "../../assets/notion.png";

import figma from "../../assets/figma.png";

import trello from "../../assets/trello.png";

import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full my-[50px] w-full bg-[url(/background-hero.png)] bg-no-repeat bg-center flex justify-center items-center flex-col px-[20px] lg:m-0 lg:p-0 lg:h-screen"
    >
      <h1 className="bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD] text-transparent bg-clip-text text-[30px] font-bold mb-1.5 lg:text-[55px] ">
        Olá, eu sou Kauanny
      </h1>

      <p
        className="
        min-h-[40px] mb-2 text-[20px] text-white  
      "
      >
        Web Design & UI/UX Design
      </p>

      <p className="text-[18px] font-normal text-[#EDE8E8D9] max-w-[505px] text-center mb-[20px]">
        Resolvo problemas de usuários, criando produtos intuitivos, acessíveis e
        funcionais.
      </p>

      <div className="flex items-center justify-center gap-5 mb-9">
        <a href="https://www.behance.net/kauannylucena" target="_blank" className="transition-all hover:opacity-70">
          <FaBehanceSquare size={30} color="#EDE8E8D9" />
        </a>

        <a href="www.linkedin.com/in/kauanny-lucena" target="_blank" className="transition-all hover:opacity-70">
          <FaLinkedin size={30} color="#EDE8E8D9" />
        </a>

        <a href="mailto:kaaluc2@gmail.com" target="_blank" className="transition-all hover:opacity-70">
          <MdEmail size={30} color="#EDE8E8D9" />
        </a>
      </div>

      <div className="flex items-center justify-center gap-[70px] w-full">
        <a
          href="#"
          className="bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD] w-full max-w-[215px] h-[50px] flex items-center justify-center cursor-pointer rounded-2xl text-[18px] font-bold text-white"
        >
          Contate-me
        </a>

        <a
          href="#"
          className="border-2 border-[#293D55] w-full max-w-[215px] h-[50px] flex items-center justify-center cursor-pointer rounded-2xl text-[18px] font-bold text-[#293D55]"
        >
          Baixar CV
        </a>
      </div>

      <div className="overflow-hidden w-full mt-[40px] lg:mt-[150px] max-w-[500px]">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Primeira lista */}
          <div className="flex gap-8">
            <img src={illustrator} alt="Illustrator" />
            <img src={photoshop} alt="Photoshop" />
            <img src={miro} alt="Miro" />
            <img src={notion} alt="Notion" />
            <img src={figma} alt="Figma" />
            <img src={trello} alt="Trello" />
          </div>

          {/* Lista duplicada */}
          <div className="flex gap-8">
            <img src={illustrator} alt="Illustrator" />
            <img src={photoshop} alt="Photoshop" />
            <img src={miro} alt="Miro" />
            <img src={notion} alt="Notion" />
            <img src={figma} alt="Figma" />
            <img src={trello} alt="Trello" />
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
}
