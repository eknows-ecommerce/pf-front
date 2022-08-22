import React, { useEffect, useState } from 'react'
//import { useMediaQuery } from 'react-responsive'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../features/actions/libros'
import { getAll } from '../../features/actions/review'
import Button from '../../components/templates/Button'
import ReviewCard from '../../components/review/Review.jsx'
import ReviewModal from '../../components/review/Write.jsx'
import Footer from 'components/footer/Footer'

export default function Detalle() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [listaCarrito, setListaCarrito] = useState(
    JSON.parse(localStorage.getItem('carrito')) ?? []
  )
  const [revs, setRevs] = useState(6)
  const { libro } = useSelector(({ librosStore }) => librosStore)
  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  //const { pedido } = useSelector(({ pedidosStore }) => pedidosStore)

  let tags = []


  useEffect(() => {
    dispatch(getAll('?LibroId=' + id))
  }, [])

  useEffect(() => {
    dispatch(getById(id))
  }, [])

  function getCategorias() {
    let cats = []
    libro.CategoriaLibro.map((c) => cats.push(<li className='mr-2 ml-2'> -{c.nombre}</li>))
    return cats
  }
  function getTags() {
    let tags = []
    libro.TagLibro.map((t) => tags.push(<li className='mr-2 ml-2'> -{t.nombre}</li>))
    return tags
  }

  function getReviews() {
    let out = []
    reviews.forEach((r) => {
      out.push(
        <ReviewCard
          key={crypto.randomUUID()}
          title={r.titulo}
          text={r.texto}
          rate={r.rating}
          likes={r.likes}
          author={r.UsuarioId}
        />
      )
    })
    return out.slice(0, revs)
  }

  function handleCarrito(e) {
    const existe =
      listaCarrito.length > 0 &&
      listaCarrito.find((item) => item.id === libro.id)
    if (!existe) {
      const elemento = [
        ...listaCarrito,
        { id: libro.id, cantidad: 1, precio: libro.precio },
      ]
      setListaCarrito(elemento)
      localStorage.setItem('carrito', JSON.stringify(elemento))
    }
  }
  /*function handleAdd(e) {
    e.preventDefault()
  }*/

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
            <form className="space-y-4 lg:pt-8">
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
                  <a href="?" className="inline-block mt-1 underline">
                    Find out more
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xl  font-bold">${libro.precio}</p>
              </div>
              <Link to="/home/carrito">
                <Button onClick={handleCarrito}>Comprar</Button>
              </Link>
              <Button secondary>Agregar a favoritos</Button>
            </form>
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
                  {usuario?.id > 0 && <ReviewModal idLibro={id} idUsuario={usuario.id} />}
                  {revs < reviews.length && <button
                    className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                    onClick={() => setRevs(revs + 3)}
                  >
                    Lea todas las reviews
                  </button>}
                </>
              </div>
              {reviews.length > 0 ?
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
      <Footer />
    </>
  )
}
