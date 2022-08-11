export default function Datos() {
  return (
    <>
      <>
        {/* Container for demo purpose */}
        <div className="container my-24 px-6 ">
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n\n      /* These are the KEY styles - you can add them directly to any object you want in your project */\n      .fancy-border-radius {\n        border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;\n      }\n    ',
              }}
            />
            {/* Jumbotron */}
            <div className="container xl:px-32 text-center lg:text-left">
              <div className="grid lg:grid-cols-2  items-center">
                <div className="mb-12 lg:mb-0">
                  <div
                    className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.55)',
                      backdropFilter: 'blur(30px)',
                      zIndex: 1,
                    }}
                  >
                    <h2 className="text-3xl font-bold mb-4 display-5">
                      Seguimos creciendo!
                    </h2>
                    <p className="text-gray-500 mb-12">
                      Nuestras Ventas crecen al igual que las subscripciones y
                      visitas
                    </p>
                    <div className="grid md:grid-cols-3 gap-x-6">
                      <div className="mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-dark mb-4">
                          10%
                        </h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                          Mas de usuarios registrados
                        </h5>
                      </div>
                      <div className="mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-dark mb-4">
                          70%
                        </h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                          De las ventas fueron concretadas
                        </h5>
                      </div>
                      <div className="">
                        <h2 className="text-3xl font-bold text-dark mb-4">
                          +1000
                        </h2>
                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                          visitas por dia
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://img.freepik.com/fotos-premium/border-collie-cachorro-divertido-anteojos-gorro-graduacion-aislado-sobre-fondo-blanco-perro-mirando-sombrero-graduado-gafas-como-profesor-estudiante-vuelta-escuela-genial-estilo-nerd-mascota-divertida_80942-6472.jpg?w=2000"
                    className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Jumbotron */}
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
    </>
  )
}
