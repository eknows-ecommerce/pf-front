import React, { useEffect /* useState */ } from 'react'
/* import Swal from 'sweetalert2'; */
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Search from 'components/search/Search'

export default function Kstories() {
  const { totalLibros } = useSelector(({ librosStore }) => librosStore)


  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
          Donde estes y en cualquier momento...
        </p>
        <Search formatos="formatos=[2,3]" />
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {totalLibros &&
            totalLibros.map((e) => (
              <div key={crypto.randomUUID()} className=" relative " >
                <div className=" relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src={e.portada}
                    alt="A girl Posing Img"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/${e.id}`}>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver Detalles
                      </button>
                    </Link>
                  </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  {e.autor}
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                  {e.titulo}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
