import React, { useEffect, useState } from 'react'
import Search from 'components/search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setFormatos } from 'features/reducers/librosSlice'
import { useLocation } from 'react-router-dom'
import ContenedorKpages from 'components/contenedores/ContenedorKpages'
import Footer from 'components/footer/Footer'

const mensaje1 = 'Los libros son espejos: sólo se ve en ellos lo que uno ya lleva dentro...'
const mensaje2 = 'Pocas son las ocasiones en que la vida permite a uno pasearse por sus propios sueños y acariciar un recuerdo perdido con las manos...'

export default function Kpages() {
  const {count} = useSelector(({librosStore})=> librosStore)
  const location = useLocation()
  const [mensaje, setMensaje] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    location.pathname === '/views'
      ? dispatch(setFormatos('formatos=[2,3]'))
      : dispatch(setFormatos('formatos=[1]'))
    location.pathname === '/views' ? setMensaje(mensaje1) : setMensaje(mensaje2)
  }, [dispatch, location.pathname])

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
        {mensaje}
      </p>
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
        Hay {count} libros.
      </p>

      <Search />
      <ContenedorKpages />
      <Footer/>
    </div>
  )
}
