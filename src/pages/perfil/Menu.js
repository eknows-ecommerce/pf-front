import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/templates/Button'
import { getById } from '../../features/actions/usuarios'

export default function Menu() {
  const dispatch = useDispatch()
  const { usuarios, usuario } = useSelector(
    ({ usuariosStore }) => usuariosStore
  )
  const idProf = usuarios[0][0].id

  useEffect(() => {
    dispatch(getById(idProf))
  }, [idProf, dispatch])
  console.log('USUARIOS', usuarios)
  console.log('USUARIO', usuario)

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
            <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
              <img
                class="flex mt-10 rounded-full object-left w-40 h-40"
                src={usuario.picture}
                alt="Man using a computer"
              />

              <h2 className=" text-3xl font-bold sm:text-6xl">
                Bienvenido
                <br />
                {usuario.name}!
              </h2>
              <p className="mt-4 font-poiret-one text-gray-600">
                Este es tu perfil
              </p>

              <p className="mt-4 font-poiret-one text-gray-600">
                Correo: {usuario.email}
              </p>
              <p className="mt-4 font-poiret-one text-gray-600">
                {' '}
                Membresia:{usuario.rol}
              </p>

              <a
                className="inline-flex items-center px-10 py-3 mt-10  text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                href="/get-started"
              >
                <span className="text-sm font-poiret-one font-medium">
                  {' '}
                  Log Out{' '}
                </span>
                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="grid  gap-4 sm:grid-cols-3">
              <Link
                className="block p-6 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-violetapaleta-200 hover:ring-1 hover:ring-violetapaleta-200"
                to="perfil"
              >
                <span className="inline-block p-4 rounded-lg bg-gray-50">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <h6 className="mt-2 text-2xl font-poiret-one font-normal">
                  Mi Perfil
                </h6>
              </Link>
              <a
                className="block p-6 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-violetapaleta-200 hover:ring-1 hover:ring-violetapaleta-200"
                href="/accountant"
              >
                <span className="inline-block p-4 rounded-lg bg-gray-50">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </span>
                <h6 className="mt-2 text-2xl font-poiret-one font-normal">
                  Mis Pedidos
                </h6>
              </a>
              <a
                className="block p-6 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-violetapaleta-200 hover:ring-1 hover:ring-violetapaleta-200"
                href="/accountant"
              >
                <span className="inline-block p-4 rounded-lg bg-gray-50">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <h6 className="mt-2 text-2xl font-poiret-one font-normal">
                  Favoritos
                </h6>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
