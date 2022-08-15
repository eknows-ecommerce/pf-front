import Carrusel from 'components/carrusel/Carrusel'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Ofertas() {
  return (
    <>
      <div className=" 2xl:container 2xl:mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">
            Opciones mucho mas cerca...
          </h1>
        </div>

        <div className="flex justify-center">
          <div className=" py-6 lg:px-20 md:px-6 px-4">
            <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
              <div className=" relative ">
                <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                  <p className="text-xs leading-3 text-gray-800">New</p>
                </div>
                <div className=" relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/Ufz8CwAAQBAJ?fife=w240-h480"
                    alt="A girl Posing Img"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/49`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  El gato negro
                </p>
              </div>
              <div className=" relative">
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/lpTaDwAAQBAJ?fife=w240-h480"
                    alt="A girl wearing white suit and googgles"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/95`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  Edad oscura
                </p>
              </div>

              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/iGwZEAAAQBAJ?fife=w240-h480"
                    alt="A girl wearing dark blue suit and posing"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/64`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  El Instituto
                </p>
              </div>
              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/3jBKDwAAQBAJ?fife=w240-h480"
                    alt="A girl posing and wearing white suit"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/71`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>

                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  Diez Negritos
                </p>
              </div>
              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/xpOXBwAAQBAJ?fife=w240-h480"
                    alt="Girl posing for an Img"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/80`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>

                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  La vida te ama
                </p>
              </div>
              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/-HtUDwAAQBAJ?fife=w240-h480"
                    alt="A blonde girl posing"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/84`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>

                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  Valle de la Calma
                </p>
              </div>
              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/publisher/content/images/frontcover/2oxDDwAAQBAJ?fife=w240-h480"
                    alt="A girl wearing white suit posing in desert"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/69`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>

                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  Asesinato en el Orient Express
                </p>
              </div>
              <div>
                <div className="relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src="https://books.google.com/books/content/images/frontcover/B-ol7IgEV8kC?fife=w240-h480"
                    alt="Girl wearing pink suit posing"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/34`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>

                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  El símbolo perdido{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
