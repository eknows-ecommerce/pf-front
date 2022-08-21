import Button from 'components/templates/Button'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import Logout from '../../components/sesion/Logout'
import { getByNickname } from 'features/actions/usuarios'
import { useAuth0 } from '@auth0/auth0-react'
import { getById, getByUser } from 'features/actions/pedidos'
import Barra from './Barra'

export default function Menu() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  console.log(usuario.id)

  useEffect(() => {
    dispatch(getByNickname(user))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])
  useEffect(() => {
    if (usuario) {
      dispatch(getByUser(usuario.id))
    }
  }, [usuario])
  return (
    <section>
      <div>
        <div>
          <Barra />
        </div>
        <div>
          <Outlet />
         
        </div>
      </div>
    </section>
  )
}
