import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import Carrusel from 'components/carrusel/Carrusel'
import Bienvenida from 'components/section/Bienvenida'
import Stories from 'components/section/Stories'
import Views from 'components/section/Views'

import { getAll as getallTag } from 'features/actions/tags'
import { getAll as getallCat } from 'features/actions/categorias'
import { getAll as getAllLibros } from 'features/actions/libros'
import { getByUser } from 'features/actions/favoritos'
import Footer from 'components/footer/Footer'

function Landing() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  useEffect(() => {
    dispatch(getAllLibros(`offset=0`))
    dispatch(getallCat())
    dispatch(getallTag())
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getByUser(usuario.id))
    }
  }, [usuario, isAuthenticated, dispatch])

  return (
    <div>
      <Bienvenida />
      <Carrusel />
      <Views />
      <Stories />
      <Footer />
    </div>
  )
}

export default Landing
