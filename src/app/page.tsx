import Footer from "@/components/Footer";
import Function from "@/components/Function";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="flex flex-col gap-2 items-center text-center xl:text-start p-10 xl:grid xl:grid-cols-2 xl:h-96 xl:p-40">
          <div className="flex flex-col gap-1">
            <h3 className="text-blue font-bold">QUIENES SOMOS</h3>
            <h1 className="text-4xl font-bold">¿Que es Tekneo?</h1>
          </div>
          <div>
            <p>
              <span className="font-bold">
                Somos una compañía dedicada a soluciones innovadoras en el campo
                de la Ingeniería Electrónica aplicada{" "}
              </span>
              a la automatización de edificios. Nuestros productos integran
              desde soluciones sencillas hasta complejas instalaciones de
              edificios como centros comerciales, hospitales, hoteles y aereo
              puertos.
            </p>
          </div>
        </section>
        <section className="flex items-center gap-2 bg-grey">
          <Image
            src="/img/Img-perona-celular.png"
            alt=""
            width={470}
            height={600}
            className="hidden xl:block"
          />
          <div className="flex flex-col gap-5 p-8 text-center xl:text-start xl:p-32">
            <div>
              <h3 className="text-lg text-blue font-bold">SOBRE TEKNEO</h3>
              <h1 className="text-4xl font-bold ">¿Como funciona tekneo?</h1>
            </div>
            <div className=" flex flex-col gap-4">
              <p className="font-bold ">
                Tekneo, en su catalogo de productos dispone de equipamiento para
                realizer ta integracion y supervision de datos provenientes de
                distintos sistemas con protocolos estándar como KNX, BACnet y
                MODBUS.
              </p>
              <p>
                La familia TK de productos Tekneo permite la integración de las
                analíticas avanzadas de vídeo de Mobotix con BMS de control de
                edificios en sus distintos protocolos de estándares del mercado.
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center py-32 flex-col gap-8 bg-grey">
          <div className="flex flex-col text-center">
            <h3 className="text-lg text-blue font-bold">
              FUNCIONES INTEGRALES
            </h3>
            <h1 className="text-4xl font-bold ">Aprende, Crece y Desarrolla</h1>
          </div>
          <div className="flex gap-4 items-center max-w-full overflow-x-scroll p-10 snap-center snap-mandatory ">
            <Function />
            <Function />
            <Function />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
