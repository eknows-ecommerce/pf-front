import { Link } from 'react-router-dom'

import Barra from 'pages/admin/Barra'
import Info from 'pages/perfil/Info'
import { getAllUsuarios } from 'features/actions/admin'
import { getAllLibros } from 'features/actions/admin'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export default function Admin() {
  const { getAccessTokenSilently } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const dispatch = useDispatch()

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        dispatch(getAllUsuarios(token))
        dispatch(getAllLibros(token))
      } catch (error) {
        console.log(
          'Error de token o no se pudieron traer usuarios y libros',
          error
        )
      }
    }

    getToken()
  }, [dispatch, getAccessTokenSilently])

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
