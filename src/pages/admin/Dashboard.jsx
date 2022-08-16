import Estadisticas from './Estadisticas'

export default function Dashboard() {
  return (
      <>
        {/* Container for demo purpose */}
        <div className="container my-24 px-6 ">
          <Estadisticas />
          {/* Section: Design Block */}
          <>
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
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
