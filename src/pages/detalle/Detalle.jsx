import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../features/actions/libros'
import { getAll } from '../../features/actions/review'
import Button from '../../components/templates/Button'
import ReviewCard from '../../components/review/Review.jsx'
import ReviewModal from '../../components/review/Write.jsx'
import Footer from 'components/footer/Footer'

export default function Detalle() {
  //const history = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { libro } = useSelector(
    ({ librosStore }) => librosStore
  )
  const { reviews, count } = useSelector(
    ({ reviewsStore }) => reviewsStore
  )
  const libroComprado = true; //checkar de usuario 

  useEffect(() => {
    dispatch(getAll('?LibroId=' + id))
  }, [id, dispatch])

  useEffect(() => {
    dispatch(getById(id))
  }, [id, dispatch])

  function getReviews() {
    let out = []
    reviews.forEach((r) => {
      out.push(
        <ReviewCard
          title={r.titulo}
          text={r.texto}
          rate={r.rating}
        />)
    })
    return out
  }

  function handleBuy(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAdd(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <div className="relative max-w-screen-2xl px-4 py-8 mx-auto">
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl font-poiret-one">{libro.titulo}</h1>
          <p className="mt-1 text-sm text-gray-500 ">{libro.autor}</p>
        </div>
        <div className="grid gap-8 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <img alt="" src={libro.portada} className="relative mt-4 w-full rounded-xl h-72 lg:h-[540px] object-contain" />
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
              <Button>Comprar</Button>
              <Button secondary>Agregar a favoritos</Button>
            </form>
          </div>
          <div className="lg:col-span-3 prose max-w-none ">
            <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
              <h2 className="text-3xl font-poiret-one font-bold ">Resumen:</h2>
              <p className='text-justify mr-2 ml-2'>{libro.resumen}</p>
              <br />
              <h3 className="text-2xl font-poiret-one font-bold ">Categorias</h3>
              <ul>
                <li className='mr-2 ml-2'> - categorias asignadas { } </li>
              </ul>
            </div>
            <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
              <div className="items-end justify-between sm:flex">
                <>
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-bold font-poiret-one tracking-tight sm:text-3xl">
                      Reseñas
                    </h2>
                    <p className="max-w-lg">
                      Ve lo que otros lectores tiene que decir
                    </p>
                  </div>
                  {libroComprado ? <ReviewModal idLibro={libro.id} /> : null}
                  <button
                    className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                  //onClick={getReviews}
                  >
                    Lea todas las reviews
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {getReviews()}
                <ReviewCard title={'Amazing read'} author={'Jhonny Test'} rate={4} />
                <ReviewCard title={'Great book'} author={'Eddie Murphy'} rate={3} />
                <ReviewCard title={'Espectacular'} rate={5} />
                <ReviewCard title={'Waiting for more'} author={'Martin McFly'} rate={5} />
                <ReviewCard title={'Pipí Cucú'} author={'Alberto Olmedo'} rate={5} />
                <ReviewCard title={'Brígido'} author={'Dylantero'} rate={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

/* <fieldset>
                <legend className="text-lg font-bold">Color</legend>
                <div className="flex mt-2 space-x-1">
                  <label htmlFor="color_green" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_green"
                      name="color"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_blue" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_blue"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_pink" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_pink"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_red" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_red"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_indigo" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_indigo"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                </div>
              </fieldset> */