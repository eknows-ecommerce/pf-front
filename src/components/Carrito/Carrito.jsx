/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getListCar } from 'features/actions/libros'
import { Link } from 'react-router-dom'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import useToggle from 'hooks/useToggle'
import CompraActual from "components/carrito/CompraActual"

function Carrito() {
  const dispatch = useDispatch()
  const [carritoLS, setCarritoLS] = useState(
    JSON.parse(localStorage.getItem('carrito')) || []
  )
  const [totalCompra, setTotalCompra] = useState(0)
  const [continuarCompra, setContinuarCompra] = useState(false)
  const { carrito } = useSelector(({ librosStore }) => librosStore)
  const [button,setButton ] = useState(true)

  const { toggle, handleToggle, } = useToggle()


  useEffect(() => {
    //transformar el objeto en string
    let query = 'carrito='
    carritoLS.forEach((item) => {
      query += item.id + ','
    })
    query = query.slice(0, -1)
    dispatch(getListCar(query))
    cantidadTotal()
  }, [carritoLS])

  const removeItem = (id) => {
    const newCarrito = carritoLS.filter((item) => item.id !== id)
    if (newCarrito.length === 0) {
      localStorage.setItem('carrito', JSON.stringify([]))
      setCarritoLS([])
    } else {
      localStorage.setItem('carrito', JSON.stringify(newCarrito))
      setCarritoLS(newCarrito)
    }
  }

  const cantidadTotal = () => {
    let precioTotal = 0
    carritoLS.forEach((item) => {
      precioTotal = precioTotal + item?.total
    })
    setTotalCompra(precioTotal.toFixed(2))
  }

  const increment = (id, precio) => {
    const newCarrito = carritoLS.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          total: (item?.cantidad + 1) * precio,
          cantidad: item?.cantidad + 1,
        }
      }
      return item
    })
    console.log('carrito', newCarrito)
    localStorage.setItem('carrito', JSON.stringify(newCarrito))
    setCarritoLS(newCarrito)
  }

  const decrement = (id, precio) => {
    const newCarrito = carritoLS.map((item) => {
      if (item.id === id) {
        if (item.cantidad > 1) {
          return {
            ...item,
            total: (item?.cantidad - 1) * precio,
            cantidad: item?.cantidad - 1,
          }
        }
      }
      return item
    })
    setCarritoLS(newCarrito)
    localStorage.setItem('carrito', JSON.stringify(newCarrito))
  }

  return (


    <div>
      <Link to="/home">Atras</Link>
      {carrito &&
        carrito.map((l, i) => {
          let item = carrito.filter((el) => el.id === l.id)
          return item ? (
            <div className="p-10 flex items-center" key={'libro_' + i}>
              <div className=" bg-orange-50 w-48 h-70 rounded-md overflow-hidden shadow-lg grid justify-items-center 	 ">
                <img className="h-40 w-28 5 " src={l.portada} alt="Mountain" />
                <div className="px-6 py-4 h-20">
                  <hr />
                  <div>
                    <p className="text-gray-700 text-sm ">
                      <button
                        className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 my-1.5 text-white"
                        onClick={() => decrement(l.id, l.precio)}
                      >
                        {' '}
                        -{' '}
                      </button>{' '}
                      cant:
                      {
                        carritoLS.find((libro) => libro.id === l.id)?.cantidad
                      }{' '}
                      <button
                        className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-1.5 text-white"
                        onClick={() => increment(l.id, l.precio)}
                      >
                        {' '}
                        +{' '}
                      </button>
                    </p>
                    <button className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 text-white mx-1">
                      {' '}
                      details{' '}
                    </button>
                    <button
                      className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 text-white mx-1"
                      onClick={() => removeItem(l.id)}
                    >
                      {' '}
                      remove{' '}
                    </button>
                  </div>
                </div>
              </div>
              <div className="  white-50 w-1/2 h-60 rounded-md overflow-hidden shadow-lg mx-4 px-4 text-left ">
                <div className="font-bold text-base "> {l.titulo} </div>
                <div> {l.autor} </div>
                <br />
                <div className="text-sm ">
                  <div> Valor Unidad: $ {l.precio} </div>
                  {carritoLS.find((item) => item.id === l.id)?.total.toFixed(2)}
                  <div>
                    {' '}
                    Subtotal: ${' '}
                    {carritoLS
                      .find((item) => item.id === l.id)
                      ?.total.toFixed(2)}{' '}
                  </div>
                </div>
                <br />
              </div>
            </div>
          ) : null
        })}

   
      
        <div>

           {!toggle && 
           
           <div>

            <div>

          <div className="  white-50 w-2/4 rounded-md overflow-hidden shadow-lg mx-4 px-4 text-left ">
            total actual: {totalCompra}
          </div>
          <div className="overflow-hidden p-4 shadow-lg  flex justify-center items-center">
            <button
              onClick={handleToggle}
              type="button"
              visible={button}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continuar compra
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            </div>
           </div>
           </div>

           } 
            {toggle && 
              <CompraActual totalCompra={totalCompra} />              
            }
        </div>
    

      
    </div>

  )
}

export default Carrito
