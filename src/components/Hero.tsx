export default function Hero() {
  return (
    <section
      className="h-[260px] xl:h-[550px] w-full bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: "url(/img/imagen-ingeniero-computador.jpg)" }}
    >
      <h1 className="font-bold  leading-tight absolute top-10 left-10 w-[270px] text-xl xl:top-20 xl:left-36 xl:text-4xl xl:w-[700px]">
        La solución más coherente, adaptable y avanzada para sisfacer todas tus
        necesidades.
      </h1>
    </section>
  );
}
