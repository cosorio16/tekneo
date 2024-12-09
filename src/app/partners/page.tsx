"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "./components/Hero";
import Image from "next/image";
import useStore from "@/store/store";
import Modal from "@/components/Modal";

export default function Partners() {
  const { toggleModal } = useStore();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Modal />
        <section className="p-14 flex flex-col gap-10">
          <p className="max-w-7xl m-auto w-full">
            El ecosistema Tekneo proporciona soluciones integradas para
            garantizar una seguridad completa de extremo a extremo. Tekneo reúne
            a una comunidad global de socios tecnológicos con experiencia
            específica, ofreciendo recursos y herramientas para facilitar la
            integración. Tekneo trabaja con los socios mencionados a
            continuación para ofrecer soluciones.
          </p>
          <div className="grid grid-cols-3 items-center justify-items-center gap-14 max-w-7xl w-full m-auto">
            <Image
              src={"/partners/image 4.png"}
              alt={""}
              width={200}
              height={200}
              onClick={() => toggleModal(true)}
              className="border-b cursor-pointer hover:scale-105  aspect-square object-contain transition-all"
            ></Image>
            <Image
              src={"/partners/image 5.png"}
              alt={""}
              width={200}
              height={200}
              onClick={() => toggleModal(true)}
              className="border-b cursor-pointer hover:scale-105  aspect-square object-contain transition-all"
            ></Image>
            <Image
              src={"/partners/image 6.png"}
              alt={""}
              width={200}
              height={200}
              onClick={() => toggleModal(true)}
              className="border-b cursor-pointer hover:scale-105  aspect-square object-contain transition-all"
            ></Image>
            <Image
              src={"/partners/image 7.png"}
              alt={""}
              width={200}
              height={200}
              onClick={() => toggleModal(true)}
              className="border-b cursor-pointer hover:scale-105  aspect-square object-contain transition-all"
            ></Image>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
