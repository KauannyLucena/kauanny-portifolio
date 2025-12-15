import me from '../../assets/me.jpg'

import { motion } from "motion/react"

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className='bg-[url(/bg-purble.png)] bg-no-repeat bg-[left top]'
    >
      <div
        className='flex items-center justify-center flex-col gap-[30px] max-w-[1115px] mx-auto px-[20px] lg:py-[3rem] lg:p-0 lg:gap-[100px] lg:flex-row'
      >
        <img src={me} alt="Foto de perfil" className='max-w-[430px] w-full' />

        <div>
          <p
            className="bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD] text-transparent bg-clip-text text-[35px] font-bold mb-1.5"
          >
            Sobre mim
          </p>

          <p
            className='
              text-[18px]
              font-normal 
              text-[#EDE8E8D9]
            '
          >
            Sou designer e curiosa por natureza, vivo fuçando ideias novas,
            testando combinações e buscando jeitos de deixar tudo mais bonito e
            funcional. Entre um layout e outro, adoro me perder em filmes,
            viajar, comer uma boa massa e, claro, dar atenção para meus gatos,
            que basicamente supervisionam tudo que eu faço. <br /> <br />

            Meu foco é criar projetos que conectem de verdade com as pessoas,
            sem firula, só comunicação clara, visual atraente e aquele toque que
            faz a diferença.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
