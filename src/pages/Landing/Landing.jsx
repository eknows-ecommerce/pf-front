import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Carrusel from 'components/carrusel/Carrusel'
import Bienvenida from 'components/section/Bienvenida'
import Stories from 'components/section/Stories'
import Views from 'components/section/Views'

import { getAll as getallTag } from 'features/actions/tags'
import { getAll as getallCat } from 'features/actions/categorias'
import { getAll as getAllLibros } from 'features/actions/libros'
import Footer from 'components/footer/Footer'

function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllLibros(`offset=0`))
    dispatch(getallCat())
    dispatch(getallTag())
  }, [dispatch])

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
