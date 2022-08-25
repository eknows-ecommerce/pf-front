import React, { useEffect, useState } from 'react'
import Search from 'components/search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ContenedorKpages from 'components/contenedores/ContenedorKpages'
import Footer from 'components/footer/Footer'
import { getAllKpage } from 'features/actions/libros'
import Carousel from 'components/section/Carousel'
import { getAll as getAllCategorias } from 'features/actions/categorias'

const mensaje1 =
  'Los libros son espejos: sólo se ve en ellos lo que uno ya lleva dentro...'
const mensaje2 =
  'Pocas son las ocasiones en que la vida permite a uno pasearse por sus propios sueños y acariciar un recuerdo perdido con las manos...'

export default function Kpages() {
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
const location = useLocation()
  const [mensaje, setMensaje] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(getAllCategorias())
  }, [dispatch])

     useEffect(() => {
    if (window.scrollY) {
      window.scroll(0, 0) // Restablece la posición de desplazamiento en la parte superior izquierda del documento
    }

    location.pathname === '/views'
      ? dispatch(getAllKpage('formatos=[2,3]'))
      : dispatch(getAllKpage('formatos=[1]'))
    location.pathname === '/views' ? setMensaje(mensaje1) : setMensaje(mensaje2)
  }, [dispatch, location.pathname]) 

  return (
    <div className=" 2xl:container 2xl:mx-auto bg-gray-100">
      <h3 className=" px-80 py-4 w-10/12 mx- md:w-full font-style: italic   lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
        {mensaje}
      </h3>


   
      {categorias.length > 0 &&
        categorias.map((c) => <Carousel key ={crypto.randomUUID()} categoria={c} />)}

      <Footer />
    </div>
  )
}
