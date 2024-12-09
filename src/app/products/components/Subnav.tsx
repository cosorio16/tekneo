export default function Subnav() {
  return (
    <nav className="grid grid-cols-2 gap-2 text-greytxt font-medium uppercase py-4 text-xs md:text-sm lg:text-base xl:gap-10 w-full justify-between lg:grid-cols-4 ">
      <button className="border-b-2 p-2 border-opacity-0 border-greytxt hover:border-opacity-100 transition-all truncate">
        DETALLES DEL PRODUCTO
      </button>
      <button className="border-b-2 p-2 border-opacity-0 border-greytxt hover:border-opacity-100 transition-all truncate">
        BENEFICIOS
      </button>
      <button className="border-b-2 p-2 border-opacity-0 border-greytxt hover:border-opacity-100 transition-all truncate">
        USOS
      </button>
      <button className="border-b-2 p-2 border-opacity-0 border-greytxt hover:border-opacity-100 transition-all truncate">
        MODELOS Y ESPECIFICACIONES
      </button>
    </nav>
  );
}
