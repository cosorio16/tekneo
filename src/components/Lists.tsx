import useStore from "@/store/store";

export default function List() {
  const { toggleList, list } = useStore();

  return (
    <div
      onMouseEnter={() => toggleList(true)}
      onMouseLeave={() => toggleList(false)}
      className={`${
        list
          ? "opacity-100 scale-100"
          : "opacity-0 z-0 scale-95 pointer-events-none"
      } flex shadow-md border border-grey justify-center gap-8 py-5 xl:px-32 px-5 absolute top-full left-0 z-50 bg-white transition-all`}
    >
      <div className="grid items-center min-w-40 xl:min-w-60 min-h-full transition-all">
        {[...Array(3)].map((e, i) => (
          <button
            key={i}
            className="h-10 hover:border-l-sky border-l-[#ffffff00] border-l-4 bg-grey font-medium border-b border-b-grey hover:border-opacity-100 bg-opacity-10 transition-all"
          >
            PRODUCTO {i + 1}
          </button>
        ))}
        {[...Array(3)].map((e, i) => (
          <button
            key={i}
            className="h-10 hover:border-l-sky border-l-[#ffffff] border-l-4 bg-grey font-medium border-b border-b-grey hover:border-opacity-100 bg-opacity-10 transition-all"
          >
            SOFTWARE {i + 1}
          </button>
        ))}
        <button className="text-sky opacity-50 hover:opacity-100 text-center h-12 flex items-center justify-center text-sm transition-all">
          TODOS LOS PRODUCTOS
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {[...Array(6)].map((e, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h1 className="text-xl size-20 border ">Gelice</h1>
            <p className="border-sky border-l-2 px-4 font-bold">
              PRODUCTO {i + 1}
            </p>
            <p className="font-medium text-greytxt text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              totam quaerat doloribus optio nihil, sequi amet perspiciatis animi
              dolorem autem!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
