import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFavorite from 'hooks/useToggle'
import { getById } from '../../features/actions/libros'
import { getAll } from '../../features/actions/review'
import Button from '../../components/templates/Button'
import ReviewCard from '../../components/review/Review.jsx'
import ReviewModal from '../../components/review/Write.jsx'
import Footer from 'components/footer/Footer'
import { useAuth0 } from '@auth0/auth0-react'
import {
  createByUser,
  deleteByUser,
  getByUser,
} from 'features/actions/favoritos'
import Swal from 'sweetalert2'
import { getByNickname } from 'features/actions/usuarios'

export default function Detalle() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const disptach = useDispatch()
  const { user, isAuthenticated, loginWithPopup } = useAuth0()

  const [revs, setRevs] = useState(6)
  const { libros, libro } = useSelector(({ librosStore }) => librosStore)
  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { favoritos } = useSelector(({ favoritosStore }) => favoritosStore)
  //const { pedido } = useSelector(({ pedidosStore }) => pedidosStore)

  let cats = []
  let tags = []
  libros.forEach((l) => {
    l.id === id &&
      l.CategoriaLibro.map((c) =>
        cats.push(<li className="mr-2 ml-2"> -{c.nombre}</li>)
      ) &&
      l.TagLibro.map((t) =>
        tags.push(<li className="mr-2 ml-2"> -{t.nombre}</li>)
      )
  })

  //const libroComprado = true

  useEffect(() => {
    if (window.scrollY) {
      window.scroll(0, 0) // Restablece la posición de desplazamiento en la parte superior izquierda del documento
    }
    dispatch(getAll('?LibroId=' + id))
  }, [])

  useEffect(() => {
    dispatch(getById(id))
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

  function getReviews() {
    // let out = []
    // reviews.forEach((r) => {
    //   out.push(
    //     <ReviewCard
    //       key={crypto.randomUUID()}
    //       title={r.titulo}
    //       text={r.comentario}
    //       rate={r.rating}
    //       likes={100}
    //       author={r.UsuarioId}
    //     />
    //   )
    // })
    // return out.slice(0, revs)
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
            {/*extra imgs?*/}
          </div>
          <div className="lg:top-0 lg:sticky">
            <div className="space-y-4 lg:pt-8">
              {/** colores comentario abajo */}
              <fieldset>
                <legend className="text-lg font-bold">Tipo</legend>
                <div className="flex mt-2 space-x-1">
                  <label htmlFor="tipo_ebook" className="cursor-pointer">
                    <input
                      type="radio"
                      id="tipo_ebook"
                      name="tipo"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                      eBook
                    </span>
                  </label>
                  <label htmlFor="tipo_fisico" className="cursor-pointer">
                    <input
                      type="radio"
                      id="tipo_fisico"
                      name="tipo"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                      Físico
                    </span>
                  </label>
                </div>
              </fieldset>
              <div className="p-4 bg-gray-100 border rounded">
                <p className="text-sm">
                  <span className="block">Texto para posibles descuentos?</span>
                  <a href="#" className="inline-block mt-1 underline">
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
              <h2 className="text-3xl font-comforta-300 font-bold ">
                Resumen:
              </h2>
              <p className="text-justify mr-2 ml-2">{libro.resumen}</p>
              <br />
              <div className="flex justify-evenly">
                <div>
                  <h3 className="text-2xl font-poiret-one font-bold">
                    Categorias
                  </h3>
                  <ul>{cats}</ul>
                </div>
                <div>
                  <h3 className="text-2xl font-poiret-one font-bold">Tags</h3>
                  <ul>{tags}</ul>
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
                    <p className="max-w-lg">
                      Ve lo que otros lectores tiene que decir
                    </p>
                  </div>
                  {usuario.id > 0 ? (
                    <ReviewModal idLibro={id} idUsuario={usuario.id} />
                  ) : null}
                  <button className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white">
                    Lea todas las reviews
                  </button>
                </>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {getReviews()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
