import React from 'react'
import { Link } from 'react-router-dom'

const MasVendidos = () => {
  return (
    <div className="2xl:mx-auto 2xl:container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">
          Descubre Nuestros Best Sellers
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/publisher/content/images/frontcover/s-JNDgAAQBAJ?fife=w240-h480"
                alt="black guy"
                className="w-full h-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">J.K. Rowling</p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  Animales Fantásticos
                </h1>
                <Link to={`/detalle/59`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles{' '}
                  </p>
                </Link>
              </div>
            </div>{' '}
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/content/images/frontcover/FGn5cD-lCtQC?fife=w240-h480"
                alt="black guy"
                className="w-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">
                  J. R.R. Tolkien
                </p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  El Slimarillion
                </h1>
                <Link to={`/detalle/53`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles
                  </p>
                </Link>
              </div>
            </div>{' '}
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/publisher/content/images/frontcover/g9gtEAAAQBAJ?fife=w240-h480"
                alt="black guy"
                className="w-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">
                  Nicholas Sparks
                </p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  El Regreso
                </h1>
                <Link to={`/detalle/9`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">
          Encuentrate con todo lo que buscas
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/publisher/content/images/frontcover/8FjODwAAQBAJ?fife=w240-h480"
                alt="black guy"
                className="w-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">
                  Suzzane Collins
                </p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  Los Juegos del Hambre
                </h1>
                <Link to={`/detalle/23`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles
                  </p>
                </Link>
              </div>
            </div>{' '}
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/publisher/content/images/frontcover/vNocAwAAQBAJ?fife=w240-h480"
                alt="black guy"
                className="w-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">
                  George R. R. Martin
                </p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  Juego de Tronos
                </h1>
                <Link to={`/detalle/25`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles
                  </p>
                </Link>
              </div>
            </div>{' '}
            <div className="relative flex flex-col">
              <img
                src="https://books.google.com/books/publisher/content/images/frontcover/hGwZEAAAQBAJ?fife=w240-h480"
                alt="black guy"
                className="w-full"
              />
              <img
                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                alt="opacity bg"
                className="absolute w-full h-full top-0"
              />
              <div className="absolute m-6 bottom-0 z-30">
                <p className="text-sm leading-none text-white">Stephen King</p>
                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                  El resplandor
                </h1>
                <Link to={`/detalle/63`}>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Ver detalles
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasVendidos
