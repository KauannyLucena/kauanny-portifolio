import React, { useRef } from "react";

import { motion } from "motion/react";

import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

export function Footer() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_pfvr7gf",
        "template_9rwi24m",
        form.current,
        "iODXcCNtWDomqrUoo"
      )
      .then(() => {
        form.current?.reset();

        toast.success("✅ Formulário enviado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("❌ Ocorreu uma falha ao enviar formulário!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[linear-gradient(180deg,#010811_0%,#030A14_63.46%,#333561_86.06%,#6461AF_100%)] h-screen flex items-center justify-between flex-col lg:mt-[20px] lg:max-h-[550px]"
    >
      <div className="flex flex-col px-[20px] items-start max-w-[1115px] mx-auto gap-[20px] lg:gap-10 lg:p-0 lg:flex-row ">
        <div className="flex items-left justify-start flex-col w-full">
          <p className="bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD] text-transparent bg-clip-text text-[28px] font-bold mb-1.5">
            Vamos trabalhar juntos
          </p>

          <p className="text-[18px] font-normal text-[#EDE8E8D9] mb-[50px]">
            Se você tem uma ideia, projeto ou apenas quer trocar uma ideia, vou
            adorar conversar com você. Estou aberta a colaborações criativas,
            freelas e oportunidades remotas.
            <br /> <br />
            Bora construir experiências que façam a diferença?
          </p>

          <div className="flex items-center justify-center gap-5 mb-9 max-w-max">
            <a
              href="https://www.behance.net/kauannylucena"
              target="_blank"
              className="transition-all hover:opacity-70"
            >
              <FaBehanceSquare size={30} color="#EDE8E8D9" />
            </a>

            <a
              href="www.linkedin.com/in/kauanny-lucena"
              target="_blank"
              className="transition-all hover:opacity-70"
            >
              <FaLinkedin size={30} color="#EDE8E8D9" />
            </a>

            <a
              href="mailto:kaaluc2@gmail.com"
              target="_blank"
              className="transition-all hover:opacity-70"
            >
              <MdEmail size={30} color="#EDE8E8D9" />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 w-full 
              bg-white/5 backdrop-blur-md 
              p-6 rounded-2xl border border-white/10"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Seu nome"
            required
            className="
                bg-white/10 text-white 
                placeholder:text-white/50
                h-[60px] rounded-xl px-5
                outline-none border border-white/10
                transition-all
                focus:border-[#6E69F6]
                focus:ring-2 focus:ring-[#6E69F6]/40
              "
          />

          <input
            name="user_email"
            type="email"
            placeholder="Seu e-mail"
            required
            className="
                bg-white/10 text-white 
                placeholder:text-white/50
                h-[60px] rounded-xl px-5
                outline-none border border-white/10
                transition-all
                focus:border-[#6E69F6]
                focus:ring-2 focus:ring-[#6E69F6]/40
              "
          />

          <textarea
            name="message"
            placeholder="Conte um pouco sobre sua ideia"
            required
            className="
                bg-white/10 text-white 
                placeholder:text-white/50
                min-h-[150px] rounded-xl p-5
                outline-none border border-white/10
                transition-all resize-none
                focus:border-[#6E69F6]
                focus:ring-2 focus:ring-[#6E69F6]/40
              "
          />

          <button
            type="submit"
            className="
              relative overflow-hidden
              bg-gradient-to-r from-[#E055CE] via-[#6E69F6] to-[#3834BD]
              h-[50px] rounded-xl
              text-[18px] font-normal text-white
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6E69F6]/40
              lg:max-w-[220px]
              cursor-pointer
            "
          >
            Enviar mensagem
          </button>
        </form>
      </div>

      <p className="text-sm text-white/60 text-center mx-3 pb-3">
        © 2025 Kauanny Lucena — Desenvolvido com carinho e criatividade.
      </p>
    </motion.footer>
  );
}
