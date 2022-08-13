import { Link } from 'react-router-dom'

import Barra from 'pages/admin/Barra'
import Info from 'pages/perfil/Info'
import { getAll as getAllUsuarios } from 'features/actions/usuarios'
import { getAll as getAllLibros } from 'features/actions/libros'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Admin() {
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const dispatch = useDispatch()

  useEffect(() => {
    if (usuario.rol === 'admin') {
      dispatch(getAllUsuarios())
      dispatch(getAllLibros())
    }
  }, [dispatch, usuario])

  if (usuario.rol !== 'admin') {
    return (
      <div>
        <h1>No tienes acceso</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col max-h-full min-h-screen">
      <div>
        <Link
          to="/menu"
          className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
        >
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt={usuario.nickname}
          />
          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">{usuario.name}</strong>
              <span>{usuario.email}</span>
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-grow h-screen ">
        <Barra />
        <Info />
      </div>
    </div>
  )
}
