export default function Footer() {
  return (
    <footer className="bg-black text-white  flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 xl:grid-cols-5 justify-items-center py-10 px-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">PRODUCTOS</h1>
          {[...Array(7)].map((e, i) => (
            <p key={i} className="text-sm">
              Producto {i + 1}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">SOFTWARE</h1>
          {[...Array(7)].map((e, i) => (
            <p key={i} className="text-sm">
              Software {i + 1}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">SOCIOS</h1>
          <p>Zennio</p>
          <p>Mobotix</p>
          <p>Logic Machine</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">SOLUCIONES</h1>
          {[...Array(7)].map((e, i) => (
            <p key={i} className="text-sm">
              Soluciones {i + 1}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">CONTACTO</h1>
          <p>Zennio</p>
          <p>Mobotix</p>
          <p>Logic Machine</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-white text-black py-10 px-10 items-center text-center justify-center">
        <h1>TEKNEO</h1>
        <div className="text-xs">
          <p className="font-bold">Copyright &copy; 2024 Tekneo Todos los derechos reservados.</p>
          <p>Términos de servicio | Aviso de política de privacidad </p>
        </div>
      </div>
    </footer>
  );
}
