export default function Function({ icon, description, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 rounded-lg min-w-72 max-w-72  bg-gradient-to-b from-sky to-[#006BB6] py-10 px-4 text-white snap-center snap-mandatory">
      <svg width="70" height="70" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"
        />
      </svg>
      <h1>App Tekneo</h1>
      <p>
        La aplicación de Tekneo ofrece un sistema de vigilancia en tiempo real
        que puede ver y usar desde su móvil. El servicio integrando alarmas
        dependiendo de las condiciones de monitoreo que el usuario desee.
      </p>
    </div>
  );
}
