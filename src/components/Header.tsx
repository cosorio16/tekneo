"use client";

import Menu from "./Menu";
import useStore from "../store/store.js";
import List from "@/components/Lists";
import Link from "next/link";

export default function Header() {
  const { toggleMenu, toggleList } = useStore();

  return (
    <header className="relative">
      <Menu />
      <nav className="flex items-center bg-black text-white justify-between md:hidden p-4">
        <button onClick={() => toggleMenu()}>Menu</button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border py-1 px-4 rounded-full border-opacity-30 border-white">
            <input
              type="text"
              name=""
              id=""
              placeholder="BUSCAR"
              className="p-1 text-white bg-opacity-0 bg-white uppercase focus:outline-none text-sm"
            />
            <button>Lupa</button>
          </div>
          <button>World</button>
        </div>
      </nav>

      <nav className="hidden md:flex flex-col relative">
        <List />
        <div className="flex items-center gap-4 bg-black text-white justify-end w-full py-2 px-20">
          <div className="flex items-center gap-2 border py-1 px-4 rounded-full border-opacity-30 border-white">
            <input
              type="text"
              name=""
              id=""
              placeholder="BUSCAR"
              className="p-1 text-white bg-opacity-0 bg-white uppercase focus:outline-none text-sm"
            />
            <button>Lupa</button>
          </div>
          <button>World</button>
        </div>

        <div className="flex justify-between items-center shadow h-16 px-20 gap-5">
          <h1>TEKNEO</h1>
          <div className="flex items-center gap-5 font-medium h-full">
            <Link
              href="/"
              className="border-b-2 border-black border-opacity-0 h-full flex items-center justify-center hover:border-opacity-100 transition-all min-w-32"
            >
              Home
            </Link>
            <Link
              onMouseEnter={() => toggleList(true)}
              onMouseLeave={() => toggleList(false)}
              onMouseDown={() => toggleList(false)}
              href="/products"
              className="border-b-2 border-black border-opacity-0 h-full flex items-center justify-center hover:border-opacity-100 transition-all min-w-32"
            >
              Productos
            </Link>
            <a
              href="#"
              className="border-b-2 border-black border-opacity-0 h-full flex items-center justify-center hover:border-opacity-100 transition-all min-w-32"
            >
              Soluciones
            </a>
            <a
              href="#"
              className="border-b-2 border-black border-opacity-0 h-full flex items-center justify-center hover:border-opacity-100 transition-all min-w-32"
            >
              Socios
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
