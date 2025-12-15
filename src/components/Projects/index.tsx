import React, { useRef } from 'react';
import Thumb from '../../assets/thumb.jpg';

import { motion } from "motion/react"

export function Projects() {
  const projects = [
    { id: 1, name: 'Loren Ipsum', description: 'Lorem ipsum...', thumb: Thumb },
    { id: 2, name: 'Loren Ipsum', description: 'Lorem ipsum...', thumb: Thumb },
    { id: 3, name: 'Loren Ipsum', description: 'Lorem ipsum...', thumb: Thumb },
    { id: 4, name: 'Loren Ipsum', description: 'Lorem ipsum...', thumb: Thumb },
    { id: 5, name: 'Loren Ipsum', description: 'Lorem ipsum...', thumb: Thumb }
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse Down
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el) return;

    isDown.current = true;
    el.classList.add('grabbing');

    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  // Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el || !isDown.current) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    el.scrollLeft = scrollLeft.current - walk;
  };

  // Mouse Up & Leave
  const handleMouseUpLeave = () => {
    const el = sliderRef.current;
    isDown.current = false;

    el?.classList.remove('grabbing');
  };

  // Touch Start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.touches[0].pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  // Touch Move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el || !isDown.current) return;

    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    el.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col max-w-[1115px] mb-[150px] mx-auto px-[20px] py-[3rem] lg:py-0 lg:py-[3rem] lg:p-0">
        <h2 className="bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD] text-transparent bg-clip-text text-[30px] font-bold mb-1.5">
          Projetos
        </h2>

        <p className="text-[16px] font-normal text-[#3C3F72] mb-6">
          (Conheça meus projetos mais recente)
        </p>

        <div
          ref={sliderRef}
          className="flex flex-row gap-6 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpLeave}
          onMouseLeave={handleMouseUpLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-full max-w-[415px] min-h-[315px] flex flex-col relative"
            >
              <div className='relative'>
                <img
                  src={project.thumb}
                  alt={project.name}
                  className="pointer-events-none w-full h-full object-cover before:absolute before:inset-0 before:bg-black/80 "
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
