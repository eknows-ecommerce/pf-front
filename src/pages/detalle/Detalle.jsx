import React, { useEffect, useState } from 'react'
import { getById as getBook } from 'features/actions/libros'
import { getByLibro } from 'features/actions/review'
import Button from 'components/templates/Button'
import ReviewCard from 'components/review/Review.jsx'
import ReviewModal from 'components/review/Write.jsx'
import Footer from 'components/footer/Footer'
import { useAuth0 } from '@auth0/auth0-react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFavorite from 'hooks/useToggle'
import Loading from 'components/loading/Loading'
import {
  createByUser,
  deleteByUser,
  getByUser,
} from 'features/actions/favoritos'
import Swal from 'sweetalert2'
import { getByNickname } from 'features/actions/usuarios'

export default function Detalle() {
  const location = useLocation()
  const dispatch = useDispatch()
  const { id } = useParams()
  let [isReview, checkReview] = useState(null)
  const [revs, setRevs] = useState(6)
  const navigate = useNavigate()
  const disptach = useDispatch()
  const { user, isAuthenticated, loginWithPopup } = useAuth0()
  const { libro, cargando, cambiarCargando } = useSelector(
    ({ librosStore }) => librosStore
  )
  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { favoritos } = useSelector(({ favoritosStore }) => favoritosStore)
console.log("REVIEWS", reviews);
  useEffect(() => {
    if (window.scrollY) {
      window.scroll(0, 0) // Restablece la posición de desplazamiento en la parte superior izquierda del documento
    }
    dispatch(getByLibro(id))
  }, [])

useEffect(() => {
  if (isAuthenticated) {
    disptach(getByNickname(user.nickname))
  }
}, [isAuthenticated])

useEffect(() => {
  if (usuario?.id) {
    dispatch(getByUser(usuario.id))
  }
}, [usuario])

  useEffect(() => {
    if (reviews && usuario)
      checkReview(reviews.find(r => r.Review?.UsuarioId === usuario.id))
  }, [reviews, usuario])

  useEffect(() => {
    dispatch(getBook(id))
  }, [])

  const getCategorias = () => {
    let cats = []
    libro.CategoriaLibro?.map((c) => cats.push(
      <li key={crypto.randomUUID()}
        className='mr-2 ml-2'> -{c.nombre}
      </li>))
    return cats
  }

  const getTags = () => {
    let tags = []
    libro.TagLibro?.map((t) => tags.push(
      <li key={crypto.randomUUID()}
        className='mr-2 ml-2'> -{t.nombre}
      </li>))
    return tags
  }

  const getTipo = () => {
    let tipos = []
    libro.FormatoLibro?.map((t) => tipos.push(
      <label
        key={crypto.randomUUID()}
        htmlFor={t.nombre}
        className="cursor-pointer">
        <input
          type="radio"
          id={t.nombre}
          name="tipo"
          className="sr-only peer"
          defaultChecked=""
        />
        <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
          {t.nombre}
        </span>
      </label>
    ))

    return (
      <fieldset>
        <legend className="text-lg font-bold">TIPO</legend>
        <div className="flex mt-2 space-x-1">
          {tipos}
        </div>
      </fieldset>
    )
  }

  const getReviews = () => {
    let out = []
    reviews?.forEach((r) => {
      console.log(r.UsuarioName)
      out.push(
        <ReviewCard
          key={crypto.randomUUID()}
          title={r?.Review?.titulo}
          text={r?.Review?.comentario}
          rate={r?.Review?.rating}
          //likes={r.Review.likes}
          author={r?.UsuarioName}
        />
      )
    })
    return out.slice(0, revs)
  }

  const handleFavorite = () => {
    if (isAuthenticated) {
      if (favoritos.some((fav) => fav.id === Number(id))) {
        dispatch(deleteByUser({ usuarioId: usuario.id, libroId: Number(id) }))
      } else {
        dispatch(createByUser({ usuarioId: usuario.id, libroId: Number(id) }))
      }
    } else {
      Swal.fire({
        title: 'Log in',
        text: 'Debe logearse para agregar a favoritos',
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

  
  const handleCarrito = (id, precio) => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []
    const existe = carrito.length > 0 && carrito.find((item) => item.id === id)
    if (!existe) {
      localStorage.setItem(
        'carrito',
        JSON.stringify([...carrito, { id, cantidad: 1, precio }])
      )
    }
    navigate('/home/carrito', { replace: true })
  }


  return (
    <>
      {cargando === true ? (
        <Loading cambiarCargando={cambiarCargando} />
      ) : (
        <div className="relative max-w-screen-2xl px-4 py-8 mx-auto">
          <div>
            <h1 className="text-3xl font-bold lg:text-5xl font-comforta">
              {libro.titulo}
            </h1>
            <p className="mt-1 text-sm text-gray-500 ">{libro.autor}</p>
          </div>

          <div className="grid gap-8 lg:items-start lg:grid-cols-4">
            <div className="lg:col-span-3">
              <img
                alt=""
                src={libro.portada}
                className="relative mt-4 w-full rounded-xl h-72 lg:h-[540px] object-contain"
              />
            </div>
            <div className="lg:top-0 lg:sticky">
              <div className="space-y-4 lg:pt-8">
                {getTipo()}
                <div className="p-4 bg-gray-100 border rounded">
                  <p className="text-sm">
                    <span className="block">Texto para posibles descuentos?</span>
                    <a href="?" className="inline-block mt-1 underline">
                      Find out more
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xl  font-bold">${libro.precio}</p>
                </div>
                <Button onClick={() => handleCarrito(libro.id, libro.precio)}>
                    Comprar
                  </Button>
                  <Button onClick={handleFavorite} secondary>
                    {favoritos?.some((fav) => fav.id === Number(id))
                      ? 'Eliminar de favoritos'
                      : 'Agregar a favoritos'}
                  </Button>
              </div>
            </div>

            <div className="lg:col-span-3 prose max-w-none ">
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <h2 className="text-3xl font-comforta-300 font-bold ">Resumen:</h2>
                <p className="font-comforta font-bold text-justify mr-2 ml-2">{libro.resumen}</p>
                <br />
                <div className="flex justify-evenly">
                  <div>
                    <h3 className="text-2xl font-comforta-300 font-bold ">Categorias</h3>
                    <ul>
                      {getCategorias()}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-comforta-300 font-bold ">Tags</h3>
                    <ul>
                      {getTags()}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <div className="items-end justify-between sm:flex">
                  <>
                    <div className="max-w-xl">
                      <h2 className="text-3xl font-bold font-comforta-300 tracking-tight sm:text-3xl">
                        Reseñas
                      </h2>
                      <p className="font-comforta font-bold max-w-lg">
                        Ve lo que otros lectores tiene que decir
                      </p>
                    </div>
                    {!isReview && <ReviewModal idLibro={id} idUsuario={usuario.id} />}
                    {reviews && reviews.length > revs && <button
                      className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                      onClick={() => setRevs(revs + 3)}
                    >
                      Lea todas las reviews
                    </button>}
                  </>
                </div>
                {reviews && reviews.length > 0 ?
                  <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {getReviews()}
                  </div>
                  :
                  <div className='text-center font-comforta font-bold'>No hay reviews</div>
                }

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
