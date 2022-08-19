export default function DisponibilidadModal({
  libroSeleccionado,
  setDeshabilitarItemModal,
  deshabilitarLibro,
}) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-50"
        onClick={() => setDeshabilitarItemModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div
              className={`flex items-center justify-center flex-none w-12 h-12 mx-auto ${
                libroSeleccionado.isAvail ? 'bg-red-100' : 'bg-green-100'
              } rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${
                  libroSeleccionado.isAvail ? 'text-red-600' : 'text-green-600'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <h4 className="text-lg font-medium text-gray-800">
                {libroSeleccionado.isAvail ? 'Deshabilitar' : 'Habilitar'}{' '}
                {libroSeleccionado.titulo}?
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                {libroSeleccionado.isAvail ? (
                  <span>
                    {libroSeleccionado.titulo} se deshabilitará y dejará de
                    mostrarse en la tienda.
                  </span>
                ) : (
                  <span>
                    {libroSeleccionado.titulo} se habilitará y se mostrará en la
                    tienda.
                  </span>
                )}
              </p>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  onClick={deshabilitarLibro}
                  className={`w-full mt-2 p-2.5 flex-1 text-white ${
                    libroSeleccionado.isAvail
                      ? 'bg-red-600 ring-red-600'
                      : 'bg-green-600 ring-green-600'
                  } rounded-md outline-none ring-offset-2  focus:ring-2`}
                >
                  {libroSeleccionado.isAvail ? 'Deshabilitar' : 'Habilitar'}
                </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => setDeshabilitarItemModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
