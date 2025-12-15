import illustrator from "../../assets/illustrator.png";

import photoshop from "../../assets/photoshop.png";

import miro from "../../assets/miro.png";

import notion from "../../assets/notion.png";

import figma from "../../assets/figma.png";

import trello from "../../assets/trello.png";

import { motion } from "motion/react";

export function Stacks () {
  return (
    <div className="overflow-hidden w-full mt-[40px] mb-[150px] lg:mt-[150px] max-w-[1075px] mx-auto">
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
  );
};
