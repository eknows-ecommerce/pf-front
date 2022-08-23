import CardK from 'components/cards/CardK'
import React from 'react'
import { useSelector } from 'react-redux'


export default function ContenedorKpages() {
    const { totalLibros } = useSelector(({ librosStore }) => librosStore)
  return (
    <div className=" py-6 lg:px-20 md:px-6 px-4">
    <hr className=" w-full bg-gray-200 my-6" />

    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
      {totalLibros &&
        totalLibros.map((e) => (
          <CardK
            key={crypto.randomUUID()}
            id={e.id}
            portada={e.portada}
            autor={e.autor}
            titulo={e.titulo}
          />
        ))}
    </div>
  </div>
  )
}
