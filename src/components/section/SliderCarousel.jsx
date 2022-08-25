import React, { useEffect } from 'react'
import { Slider } from 'pure-react-carousel'
import {getAll as getAllLibros} from 'features/actions/libros'
import {getAll as getAllCategorias} from 'features/actions/categorias'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'

export default function SliderCarousel({cat}) {
    const {libros} = useSelector(({librosStore}) => librosStore)
    
    const {kpages: {totalLibros} }= useSelector(({librosStore}) => librosStore)


    // const librosFiltrados = libros.filter(libro => {
    //     libro.CategoriaLibro.map(el => el.nombre === cat.nombre)
    // })

    // console.log(librosFiltrados)

  return (
    <Slider>
      <div
        id="slider"
        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
      >
       <h1>{cat.nombre}</h1>
     
      </div>
    </Slider>
  )
}
