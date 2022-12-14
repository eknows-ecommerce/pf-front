import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Navegacion from './Navegacion'
import {
  getAll,
  getAll as getAllUsuarios,
  getByNickname,
} from 'features/actions/usuarios'
import { getAll as getAllLibros } from 'features/actions/libros'
import { getAll as getAllCategorias } from 'features/actions/categorias'
import { getAll as getAllTags } from 'features/actions/tags'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Admin() {
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [usuario])

  useEffect(() => {
    dispatch(getByNickname(user))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])

  if (usuario.rol !== 'admin') {
    return (
      <div>
        <h1>No tienes acceso</h1>
      </div>
    )
  }

  return (
    <div className="relative h-full">
      <Navegacion />
      <div className="border-t-2 pt-20 m-0 xl:pt-0 xl:ml-64 h-screen z-50">
        <Outlet />
      </div>
    </div>
  )
}
