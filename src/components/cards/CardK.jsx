import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function CardK({ portada, id, autor, titulo }) {
  const dispatch = useDispatch()
 /*  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { totalLibros } = useSelector(({ librosStore }) => librosStore) */
  const { kpages: {libros}, categorias } = useSelector(({ librosStore }) => librosStore)


 
 
console.log("DATA", libros);
  /* useEffect(() => {
    dispatch(getAll())
  
  }, [dispatch]) */

  return (
/*     <div  className=" relative ">
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
 */

    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" text-center lg:py-10 md:py-8 py-6">
        
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {libros &&
            libros.map((e) => (
              <div className=" relative ">
                <div className=" relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src={e.portada}
                    alt="A girl Posing Img"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link to={`/detalle/${e.LibroId}`}>
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
                {/* <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p> */}
              </div>
            ))}
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

