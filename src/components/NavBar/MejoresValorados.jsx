import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAll, getById } from '../../features/actions/libros'
import {getAll as print} from "../../features/actions/review"

const MasVendidos = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { libros, libro } = useSelector(({ librosStore }) => librosStore)
  // const data = reviews.filter((e) => e)
  console.log(reviews)
  // const info= data.map((e)=>(libros.find((elem)=>(elem.id ===e.LibroId)).portada))
  // console.log(info)
  

  useEffect(() => {
    dispatch(getAll())
    dispatch(print())
  }, [id, dispatch])
  

  return (
    // <div>
    //   <div className="2xl:mx-auto 2xl:container">
    //     <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
    //       <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">
    //         Descubre Nuestos Best Seller's
    //       </h1>
    //       {data &&
    //         data.map((e) => (
    //           <div className="flex justify-center">
    //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
    //               <div className="relative flex flex-col">
    //                 <img
    //                   src={info}
    //                   alt="portada"
    //                   className="w-full h-full"
    //                 />
    //                 <img
    //                   src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
    //                   alt="opacity bg"
    //                   className="absolute w-full h-full top-0"
    //                 />
    //                 <div className="absolute m-6 bottom-0 z-30">
    //                   <p className="text-sm leading-none text-white">
    //                     {e.autor}
    //                   </p>
    //                   <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
    //                     {e.titulo}
    //                   </h1>
    //                   <Link to={`/detalle/${e.LibroId}`}>
    //                     <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
    //                       Ver detalles{' '}
    //                     </p>
    //                   </Link>
    //                 </div>
    //               </div>{' '}
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //     <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
    //       <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">
    //         Encuentrate con todo lo que buscas
    //       </h1>
    //     </div>
    //   </div>
    // </div>
    <div>asd</div>
  )
}

export default MasVendidos
