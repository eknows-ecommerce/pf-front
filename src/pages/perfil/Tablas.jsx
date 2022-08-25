import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Vista from './Vista'

import {
  FaEnvelopeSquare,
  FaUser,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa'

export default function Tablas({ setShowModal }) {
  const [vista, setVista] = useState('favoritos')
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { count: pedidoCount } = useSelector(({ pedidosStore }) => pedidosStore)
  const { count: favCount } = useSelector(
    ({ favoritosStore }) => favoritosStore
  )
  const { reviewsByUser } = useSelector(({ reviewsStore }) => reviewsStore)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page bg-blueGray-200 min-h-screen">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: 'translateZ(0px)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6 pb-10">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={usuario.picture}
                        className="rounded-full w-36 h-36 mt-5"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-4 sm:mt-0">
                      <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#e11d48] active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {pedidoCount || 0}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Pedido/s
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {favCount || 0}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Favoritos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {reviewsByUser?.count || 0}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Reseñas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {usuario.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 flex justify-center items-center text-blueGray-400 font-bold uppercase">
                    <FaUser className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400 h-4 w-4" />
                    {usuario.nickname}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 flex justify-center items-center text-blueGray-400 font-bold uppercase">
                    <FaEnvelopeSquare className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400 h-4 w-4" />
                    {usuario.email}
                  </div>
                  <div className="flex w-full justify-center my-5 text-sm font-medium border-b border-gray-100">
                    <div
                      onClick={() => setVista('pedidos')}
                      className={`cursor-pointer p-4 -mb-px border-b focus:ring-0 focus:ring-offset-0 ${
                        vista === 'pedidos' && 'text-[#e11d48] border-red-500'
                      }`}
                    >
                      Pedidos
                    </div>
                    <div
                      onClick={() => setVista('favoritos')}
                      className={`cursor-pointer p-4 -mb-px border-b ring-0 focus:ring-0 focus:ring-offset-0 ${
                        vista === 'favoritos' && 'text-[#e11d48] border-red-500'
                      }`}
                    >
                      Favoritos
                    </div>
                  </div>
                </div>
                <Vista vista={vista} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
