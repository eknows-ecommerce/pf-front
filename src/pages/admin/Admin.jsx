import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Navegacion from './Navegacion'
import {
  getAll as getAllUsuarios,
  getByNickname,
} from 'features/actions/usuarios'
import { getAll as getAllLibros } from 'features/actions/libros'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Admin() {
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getByNickname(user))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])

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
    <>
      <Navegacion />
      <div className="border-t-2 pt-20 m-0 xl:pt-0 xl:ml-64">
        <Outlet />
      </div>
    </>
  )
}
