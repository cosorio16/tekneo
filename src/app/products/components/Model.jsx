export default function Model() {
  return (
    <div className="flex justify-between px-2 py-3 border border-greytxt border-l-4 hover:border-l-sky transition-all cursor-pointer">
      <p className="font-bold">Gelice Desplegada ULTIMA VERSIÓN</p>
      <div className="flex gap-3 items-center">
        <button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className="text-green"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"
            />
          </svg>
        </button>
        <button>
          <svg className="text-sky" width="23" height="23" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2"
              />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
