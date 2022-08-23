import React from 'react'
import { Link } from 'react-router-dom'

export default function CardK({ portada, id, autor, titulo }) {
  return (
    <div  className=" relative ">
      <div className=" relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img className=" w-full" src={portada} alt="A girl Posing Img" />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <Link to={`/detalle/${id}`}>
            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
              Ver Detalles
            </button>
          </Link>
        </div>
      </div>
      <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        {autor}
      </p>
      <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
        {titulo}
      </p>
    </div>
  )
}
