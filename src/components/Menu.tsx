"use client";

import useStore from "@/store/store";
import Link from "next/link";

export default function Menu() {
  const { toggleMenu, menu } = useStore();

  return (
    <nav
      className={` ${
        menu
          ? " opacity-100 translate-x-0"
          : " opacity-100 pointer-events-none -translate-x-full"
      } w-[50vw] min-h-dvh bg-black top-0 left-0 z-50 px-4 min-w-60 py-10 flex flex-col gap-20 transition-all fixed `}
    >
      <button
        onClick={() => toggleMenu()}
        className=" text-white self-end justify-self-end"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6L6 18M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-6 text-white text-2xl p-4">
        <Link
          onClick={() => toggleMenu()}
          href="/"
          className="h-full hover:text-sky transition-all active:scale-95"
        >
          Home
        </Link>
        <Link
          onClick={() => toggleMenu()}
          href="products"
          className="h-full hover:text-sky transition-all active:scale-95"
        >
          Productos
        </Link>
        <Link
          onClick={() => toggleMenu()}
          href="#"
          className="h-full hover:text-sky transition-all active:scale-95"
        >
          Soluciones
        </Link>
        <Link
          onClick={() => toggleMenu()}
          href="/partners"
          className="h-full hover:text-sky transition-all active:scale-95"
        >
          Socios
        </Link>
      </div>
    </nav>
  );
}
