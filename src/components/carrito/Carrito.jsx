import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAll } from '../../features/actions/libros'

export default function Carrito() {
  const { libros, count } = useSelector(({ librosStore }) => librosStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll(`offset=0`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(libros)
  return (
    // <div className={'w-full h-screen flex flex-col'}>
    //   {libros.map((lib) => {
    //     return (
    //       <div className={'w-6/6 h-1/6 flex items-center m-10'} key={lib.titulo}>
    //         <img
    //           src={lib.portada}
    //           className={'h-full w-40 object-contain'}
    //           alt=""
    //         />
    //         <p>{lib.titulo}</p>
    //         <p>{lib.precio}</p>
    //       </div>
    //     )
    //   })}
    // </div>
    <div className={'w-96 h-96 bg-slate-900 text-white text-center'}>
      Carrito
    </div>
  )
}
