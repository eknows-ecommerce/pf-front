import { Confirmar, Eliminar } from 'assets/img/svg/Svg'
import ModalComponent from 'components/modals/Modalcomponent'
import { getListCar } from 'features/actions/libros'
import useModal from 'hooks/useModal'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Checkout from './Checkout'

import { useAuth0 } from '@auth0/auth0-react'
import Swal from 'sweetalert2'

function Carrito() {
  const [detalleCompra, setDetalleCompra] = useState({})
  const { modals, openClose } = useModal()
  const dispatch = useDispatch()
  const [carritoLS, setCarritoLS] = useState(
    JSON.parse(localStorage.getItem('carrito')) || []
  )
  const [totalCompra, setTotalCompra] = useState(0)
  const { carrito } = useSelector(({ librosStore }) => librosStore)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const { isAuthenticated, user, loginWithPopup } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    //transformar el objeto en string
    const libros = carritoLS.map(({ id }) => Number(id))
    let query = `carrito=${JSON.stringify(libros)}`
    dispatch(getListCar(query))
    cantidadTotal()
  }, [carritoLS])

  const handleEliminar = (id) => {
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
      precioTotal = precioTotal + item?.precio * item?.cantidad
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

  const handleComprar = () => {
    if (isAuthenticated) {
      let amount = 0
      let idLibros = []
      carritoLS.forEach((item) => {
        amount = amount + item.precio * item.cantidad
        idLibros.push({
          id: item.id,
          cantidad: item.cantidad,
          precio: item.precio,
        })
      })
      setDetalleCompra({
        ...detalleCompra,
        currency: 'USD',
        type: 'card',
        amount: Number(amount.toFixed(2)),
        email: user.email,
        description: {
          direccionEnvio: 'DIGITAL',
          estado: 'Entregado',
          descuento: 0,
          libros: idLibros,
          UsuarioId: usuario.id,
        },
      })
      openClose('compra')
    } else {
      Swal.fire({
        title: 'Log in',
        text: 'Debe logearse para agregar poder hacer una compra',
        // icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#E11D48',
        confirmButtonText: 'Si, ir a logearse',
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithPopup()
        }
      })
    }
  }

  return (
    <>
      <div
        className="flex w-screen flex-wrap justify-center items-center bg-black bg-opacity-90  overflow-y-auto  "
        id="chec-div"
      >
        <div
          className="w-screen transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div
            className="w-screen flex md:flex-row flex-col justify-center"
            id="cart"
          >
            <div
              className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <button onClick={() => navigate(-1)}>
                <div className=" flex items-center text-gray-500 hover:text-gray-600 cursor-pointer sticky">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Regresar</p>
                </div>
              </button>

              <p className="text-5xl font-black leading-10 text-rosadito-500 pt-3 ">
                Carrito
              </p>
              <div className="  flex-wrap justify-center items-center mt-6 py-2 border-t border-gray-200">
                {carrito &&
                  carrito.map((l) => (
                    <div
                      key={crypto.randomUUID()}
                      className="m-2 lg:mx-6 flex flex-wrap shadow-md shadow-gray-600 border-spacing-2 border-black overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6"
                    >
                      <Link
                        to={`/detalle/${l.id}`}
                        className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative"
                      >
                        <img
                          className={
                            'sm:h-full md:h-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                          }
                          src={l.portada}
                          alt={l.titulo}
                          loading="lazy"
                        />
                      </Link>

                      <div className="flex flex-col justify-between flex-1 py-4">
                        <div>
                          <Link
                            to="#"
                            className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                          >
                            {l.titulo}
                          </Link>

                          <span className="block text-dorado-500">
                            Autor: {l.autor}
                          </span>
                          {/* <span className="block text-gray-500">
                            Stock: {l.stock}
                          </span> */}
                        </div>

                        <div>
                          <span className="block text-gray-800 md:text-lg font-bold mb-1">
                            ${l.precio}
                          </span>

                          {l.stock > 0 ? (
                            <span className="flex items-center text-green-500 text-sm gap-1">
                              <Confirmar />
                              'En stock'
                            </span>
                          ) : (
                            <span className="flex items-center text-rose-500 text-sm gap-1">
                              <Eliminar />
                              'Sin stock'
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
                        <div className="flex flex-col items-start gap-2">
                          <div className="w-20 h-12 flex border rounded overflow-hidden text-lg text-violet-600 font-bold">
                            <input
                              type="text"
                              value={
                                l.stock === 0
                                  ? 0
                                  : carritoLS?.find(
                                      (libro) => libro.id === l.id
                                    )?.cantidad
                              }
                              disabled="disabled"
                              className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2 "
                            />

                            <div className="flex flex-col border-l divide-y">
                              <button
                                className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100"
                                onClick={() => increment(l.id, l.precio)}
                                disabled={l.stock === 0}
                              >
                                +
                              </button>
                              <button
                                className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100"
                                onClick={() => decrement(l.id, l.precio)}
                                disabled={l.stock === 0}
                              >
                                -
                              </button>
                            </div>
                          </div>

                          <button
                            className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100"
                            onClick={() => handleEliminar(l.id)}
                          >
                            Eliminar
                          </button>
                        </div>

                        <div className=" w-14 pt-3 md:pt-2 ml-2 md:ml-8 lg:ml-16 mr-3">
                          <span className=" block text-rosadito md:text-lg font-bold">
                            $
                            {(
                              l.precio *
                              carritoLS?.find((libro) => libro.id === l.id)
                                ?.cantidad
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/3  w-full bg-gray-200 h-full shadow-sm">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-rosadito-500 border-b border-white pb-6">
                    Detalle
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      ${totalCompra ?? 0}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      Descuento
                    </p>
                    <p className="text-base font-bold leading-normal text-right text-gray-800">
                      $0.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      Envio
                    </p>
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      $0.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base font-bold leading-none text-right text-gray-800">
                      Impuesto
                    </p>
                    <p className="text-base font-bold leading-normal text-right text-gray-800">
                      $0.00
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      ${totalCompra ?? 0}
                    </p>
                  </div>
                  <button
                    className="text-2xl font-bold leading-none w-full py-5 bg-rosadito-500 border-rosadito-500 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                    onClick={handleComprar}
                  >
                    Comprar
                  </button>
                  {detalleCompra && (
                    <ModalComponent
                      modal={modals['compra']}
                      closeModal={() => openClose('compra')}
                      titulo={'Metodo de pago'}
                      ancho="450px"
                      padding="40px"
                    >
                      <Checkout
                        detalleCompra={detalleCompra}
                        setCarritoLS={setCarritoLS}
                      />
                    </ModalComponent>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 10px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: #E11D48;
                }
`}
      </style>
    </>
  )
}

export default Carrito
