import { CiHome, CiUser  } from "react-icons/ci";

import { CgScreen } from "react-icons/cg";

import { SlScreenSmartphone } from "react-icons/sl";

export function Header() {
  const isMobile = window.innerWidth <= 967;

  return (
    <>
      {isMobile ? (
        <header
          className="bg-transparent shadow-2xl border-2 border-[#f0f0f0] h-full max-h-[50px] flex items-center justify-between rounded-[50px] fixed mx-auto bottom-6 left-0 right-0 w-[50%] z-[9999]"
        >
          <nav
            className="flex items-center justify-between w-full h-full"
          >
            <ul
              className="flex justify-between px-2.5 w-full"
            >
              <li
                className="bg-[#f0f0f0] rounded-[100%] p-1.5"
              >
                <a href="#">
                  <CiHome size={25} color="#121212" />
                </a>
              </li>
              <li
                className="bg-[#f0f0f0] rounded-[100%] p-1.5"
              >
                <a href="#">
                  <CiUser size={25} color="#121212" />
                </a>
              </li>
              <li
                className="bg-[#f0f0f0] rounded-[100%] p-1.5"
              >
                <a href="#">
                  <CgScreen size={25} color="#121212" />
                </a>
              </li>
              <li
                className="bg-[#f0f0f0] rounded-[100%] p-1.5"
              >
                <a href="#">
                  <SlScreenSmartphone size={25} color="#121212" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className="w-full bg-[#0a0f14] border-b border-[#E055CE] h-20 flex items-center justify-center px-6 overflow-hidden fixed z-[9999]">
          <div className="w-full flex justify-between max-w-[1200px]">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-bold text-xl tracking-widest text-white"
              >
                WEB <span className="text-[#E055CE]">_DESIGN</span>
              </a>
            </div>

            <nav className="flex gap-6 text-gray-300 font-medium tracking-wide">
              <NavItem href="#" label="INÍCIO" />
              <NavItem href="#" label="SOBRE" />
              <NavItem href="#" label="PROJETOS" />
              <NavItem href="#" label="CONTATO" />
            </nav>
          </div>

          <div className="absolute left-0 bottom-0 w-32 h-1 bg-[#E055CE]"></div>
          <div className="absolute right-0 bottom-0 w-32 h-1 bg-[#E055CE]"></div>

          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E055CE]"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E055CE]"></div>
        </header>
      )}
    </>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-900/10 hover:opacity-[.8] transition-all hover:drop-shadow-[0_0_8px_#22d3ee]"
    >
      {label}
    </a>
  );
}
