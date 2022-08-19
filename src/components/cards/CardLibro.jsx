/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { createByUser, deleteByUser } from 'features/actions/favoritos'

import useFavorite from 'hooks/useToggle'

import Button from '../templates/Button'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function CardLibro({
  id,
  portada,
  titulo,
  descuento = 15,
  precio,
  handleCarrito,
  esFavorito,
}) {
  const { toggle, handleToggle } = useFavorite(esFavorito)
  const dispatch = useDispatch()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { isAuthenticated, loginWithPopup } = useAuth0()

  const handleFavorite = () => {
    if (isAuthenticated) {
      if (toggle) {
        dispatch(deleteByUser({ usuarioId: usuario.id, libroId: id }))
        Swal.fire(
          'Eliminar de favoritos',
          'Se ha elimino exitosamente',
          'success'
        )
      } else {
        dispatch(createByUser({ usuarioId: usuario.id, libroId: id }))
        Swal.fire(
          'Agregar a favoritos',
          'Se ha agregado exitosamente',
          'success'
        )
      }
      handleToggle()
    } else {
      Swal.fire({
        title: 'Log in',
        text: 'Debe logearse para agregar a favoritos',
        icon: 'info',
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
    <div className="relative flex flex-col justify-between items-center content-center m-2 shadow-lg shadow-current p-3">
      {toggle ? (
        <button
          className="absolute p-2 text-rosadito bg-black rounded-full right-2 top-4 z-10"
          type="button"
          onClick={handleFavorite}
        >
          <svg
            className="w-4 h-4 hover:scale-125 transition-all duration-700 ease-in-out"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="absolute p-2 text-white bg-black rounded-full right-2 top-4 z-10"
          type="button"
          onClick={handleFavorite}
        >
          <svg
            className="w-4 h-4 hover:scale-125 transition-all duration-700 ease-in-out"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      )}
      <Link className=" block flex-col justify-between" to={`/detalle/${id}`}>
        <img
          className="object-contain w-full h-56 lg:h-72 hover:scale-105 transition-all duration-700 ease-in-out"
          src={portada}
          alt={titulo}
          loading="lazy"
        />
      </Link>

      <div className="p-2 w-full h-full block flex-col justify-between items-center content-center">
        <strong className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
          Nuevo
        </strong>
        <h5 className=" mt-4 text-lg font-bold font-comforta-300">{titulo}</h5>
      </div>
      {/* <Link to="/home" onClick={addItem} className="flex flex-col items-center"> */}
      <h5 className="mt-2 text-lg font-bold text-gray-900 pb-2">${precio}</h5>
      <Button primary onClick={handleCarrito}>
        <>
          <span className="text-sm font-medium">Agregar al carrito</span>
          <svg
            className="w-5 h-5 ml-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </>
      </Button>
      {/* </Link> */}
    </div>
  )
}

export default CardLibro
