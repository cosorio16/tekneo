import { createPortal } from "react-dom";
import useStore from "@/store/store";

export default function Modal() {
  const { showModal, toggleModal } = useStore();

  return (
    <>
      {showModal &&
        createPortal(
          <>
            <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div>
            <div className="modal fixed z-50 top-[calc(50%-200px)] left-[calc(50%-300px)] bg-white w-[600px] p-5 shadow-2xl rounded-xl flex flex-col gap-4">
              <button
                onClick={() => toggleModal()}
                className="self-end rounded-full hover:bg-[#ff0000] hover:text-white transition-all p-1  "
              >
                <svg width="23" height="23" viewBox="0 0 24 24">
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
              <div className="flex flex-col gap-5 text-sm">
                <h1 className="text-xl">Mobotix</h1>
                <p>
                  MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                  aseguran una protección integral en un entorno moderno y
                  conectado. Como parte de este compromiso, Tekneo se suma como
                  socio estratégico, integrando soluciones innovadoras que
                  optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX
                  y Tekneo crean un ecosistema robusto que permite a las
                  organizaciones abordar los desafíos de seguridad
                  contemporáneos de manera efectiva y eficiente.
                </p>
                <div>
                  <p className="font-bold text-base">Funcionalidades</p>
                  <p>Sistemas de videovigilancia , operaciones de seguridad</p>
                </div>
                <div>
                  <p className="font-bold text-base">Versión</p>
                  <p>Ultima Actualización 3,2</p>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
