"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subnav from "./components/Subnav";
import Benefit from "./components/Benefit";
import Model from "./components/Model";

export default function ProductView() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <section className=" w-full flex items-center justify-around bg-sky text-white flex-col h-auto  gap-10 p-5 lg:gap-20 lg:flex-row lg:h-60 xl:h-72">
          <div className="leading-tight flex flex-col gap-4 order-2 lg:order-1">
            <div className="flex flex-col gap-1">
              <h1 className=" font-bold text-2xl lg:text-4xl">
                Nombre Completo del Produto
              </h1>
              <p className="text-lg">
                Descripción producto corta max 3 lineas.
              </p>
            </div>
            <div className="flex gap-5 flex-wrap">
              <button className="rounded-full px-4 py-3 bg-white font-bold uppercase text-black hover:scale-105 transition-all">
                DESCARGAR MANUAL
              </button>
              <button className=" border font-medium rounded-full px-4 py-3 hover:scale-105 transition-all">
                DESCARGAR DEMO
              </button>
            </div>
          </div>
          <h1 className="text-5xl order-1 lg:order-2">Gelice</h1>
        </section>
        <section className="flex flex-col gap-14 bg-grey pb-20 px-4 xl:px-48 2xl:px-56 lg:p-10">
          <Subnav />
          <div>
            <h1 className="font-bold text-xl">Detalles del Producto</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ipsum, cum labore, minus totam aut nostrum omnis, pariatur nemo
              earum quam tempora consequatur vero alias numquam? Qui sequi
              deserunt consequatur?
            </p>
          </div>
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 xl:justify-between justify-center">
            <Benefit />
            <span className="h-48 w-1 bg-greytxt rounded-full bg-opacity-50 hidden xl:block"></span>
            <Benefit />
            <span className="h-48 w-1 bg-greytxt rounded-full bg-opacity-50 hidden xl:block"></span>
            <Benefit />
          </div>
        </section>
        <section className="bg-white flex gap-10 items-center justify-center py-10 flex-col lg:flex-row lg:lg:justify-around">
          <div className="flex flex-col gap-4 w-96 p-4">
            <h1 className="text-xl font-bold">Usos del Software</h1>
            <p className="text-greytxt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              vero, voluptate harum non in officia consequuntur maxime nostrum
              sit illum quidem perspiciatis debitis quis tempore optio est
              magni, repellendus maiores accusamus incidunt libero iusto.
              Delectus.
            </p>
          </div>
          <h1>Image</h1>
        </section>
        <section className="flex flex-col xl:px-52 px-4 py-20 bg-grey gap-4">
          <h1 className="text-xl font-bold">Modelos Disponibles</h1>
          <p className="text-greytxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            commodi!
          </p>
          <div className="flex flex-col">
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
