import Estadisticas from './Estadisticas'

export default function Dashboard() {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-24 px-6 ">
        <div className="space-y-2">
          <article className="flex flex-col gap-4 p-6 bg-violetapaleta-50 border border-gray-100 rounded-lg">
            <div className="inline-flex self-end gap-2 p-1 text-red-600 bg-red-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
              <span className="text-xs font-medium"> 67.81% Menos Popular</span>
            </div>
            <div>
              <strong className="block text-sm font-medium text-black">
                {' '}
                Pery Jackson y el Ladron del Rayo{' '}
              </strong>
              <p>
                <span className="text-2xl font-medium text-black"> 12 </span>
                <span className="text-xs text-black"> visitas</span>
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-4 p-6 bg-rosadito-50 border border-gray-100 rounded-lg">
            <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-xs font-medium"> 67.81% Mas vendido </span>
            </div>
            <div>
              <strong className="block text-sm font-medium text-black">
                {' '}
                Harry Potter y la Piedra Filosofal{' '}
              </strong>
              <p>
                <span className="text-2xl font-medium text-black"> +45 </span>
                <span className="text-xs text-black"> libros</span>
              </p>
            </div>
          </article>
        </div>
        <Estadisticas />
        {/* Section: Design Block */}
        <>
          {/* Container for demo purpose */}
          <div className="container my-24 mx-auto pt-5 pb-10">
            {/* Section: Design Block */}

            <section className="mb-32 text-gray-800 text-center lg:text-left">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                    <img
                      src="https://www.xtrafondos.com/wallpapers/vertical/leyendo-un-libro-9103.jpg"
                      alt="Trendy Pants and Shoes"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-3xl font-bold mb-4 text-blue-600 display-5">
                        Seguimos creciendo!
                      </h2>
                      <p className="text-gray-500 mb-12">
                        Nuestro alcance cada vez es mayor y podes comprobarlo
                      </p>
                      <div className="grid lg:gap-x-12 md:grid-cols-3">
                        <div className="mb-12 md:mb-0">
                          <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            +1000
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            Visitas semanales
                          </h5>
                        </div>
                        <div className="mb-12 md:mb-0">
                          <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            70%
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            Ventas confirmadas
                          </h5>
                        </div>
                        <div className="">
                          <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            +10
                          </h2>
                          <h5 className="text-lg font-medium text-gray-500 mb-0">
                            Nuevos Usuarios
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
          {/* Container for demo purpose */}
        </>

        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  )
}
