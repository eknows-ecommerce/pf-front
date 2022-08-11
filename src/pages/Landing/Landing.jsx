import { useEffect } from 'react'
import Carrusel from '../../components/carrusel/Carrusel'
import Bienvenida from '../../components/section/Bienvenida'
import Stories from '../../components/section/Stories'
import Views from '../../components/section/Views'
import { getAll as getallTag } from '../../features/actions/tags'
import { getAll as getallCat } from '../../features/actions/categorias'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/actions/libros'

export default function Landing() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll())
    dispatch(getallCat())
    dispatch(getallTag())
  }, [dispatch])
  return (
    <div>
      <Bienvenida />
      <Carrusel />
      <Views />
      <Stories />
    </div>
  )
}
