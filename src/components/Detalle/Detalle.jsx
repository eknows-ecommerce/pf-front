import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../features/actions/libros'
import Button from '../templates/Button'

function ReviewCard({ title, text, author, score }) {
  function Stars() {
    let out = []; let star;
    for (let i = 0; i < 5; i++) {
      i < score ? star = "hover:animate-spin text-yellow-500" : star = "text-gray-300"
      out.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"w-6 h-6 " + star}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return (out)
  }

  return (
    <blockquote className="flex flex-col justify-between h-full p-8 bg-slate-100 rounded-3xl shadow-xl
    hover:scale-x-[1.01] hover:scale-y-[1.01]">
      <div>
        <div className="flex space-x-0.5">
          <Stars />
        </div>
        <div className="mt-4">
          <h5 className="text-xl text-center font-bold text-pink-700 sm:text-2xl">
            {title}
          </h5>
          <p className="mt-4 text-gray-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam cumque recusandae dolorum porro, quasi
            sunt necessitatibus dolorem ab laudantium vel.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-700 text-right">- {author}</footer>
    </blockquote>
  )
}

export default function Detalle() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { libro } = useSelector(({ librosStore }) => librosStore)

  useEffect(() => {
    dispatch(getById(id))
  }, [id, dispatch])

  function handleBuy(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAdd(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAddRv(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <div className="relative max-w-screen-2xl px-4 py-8 mx-auto">
        {/*<Link to="/home">
          <button
            className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Volver
          </button>
        </Link>*/}
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl font-poiret-one">
            {libro.titulo}
          </h1>
          <p className="mt-1 text-sm text-gray-500 ">{libro.autor}</p>
        </div>
        <div className="grid gap-8 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt=""
                src={libro.portada}
                className="w-full rounded-xl h-72 lg:h-[540px] object-contain"
              />
              {/*Hover to zoom?*/}
            </div>
            {/*extra imgs?*/}
          </div>
          <div className="lg:top-0 lg:sticky">
            <form className="space-y-4 lg:pt-8">
              {/* <fieldset>
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
              </fieldset> */}
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
          <div className="lg:col-span-3">
            <div className="prose max-w-none ">
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <h2 className="text-3xl font-poiret-one font-bold ">Resumen:</h2>
                <p className='text-justify mr-2 ml-2'>{libro.resumen}</p>
                <br />
                <h3 className="text-2xl font-poiret-one font-bold ">Categorias</h3>
                <ul>
                  <li className='mr-2 ml-2'> - categorias asignadas</li>
                </ul>
              </div>
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <div className="items-end justify-between sm:flex">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-bold font-poiret-one tracking-tight sm:text-3xl">
                      Reseñas
                    </h2>
                    <p className="max-w-lg">
                      Ve lo que otros lectores tiene que decir
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                    href="?"
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
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ReviewCard title={'Waiting for more'} author={'Martin McFly'} score={5} />
                  <ReviewCard title={'Espectacular'} author={'Anonimo'} score={5} />
                  <ReviewCard title={'Pipí Cucú'} author={'Alberto Olmedo'} score={5} />
                  <ReviewCard title={'Brígido'} author={'Dylantero'} score={5} />
                  <ReviewCard title={'Amazing read'} author={'Jhonny Test'} score={4} />
                  <ReviewCard title={'Great book'} author={'Eddie Murphy'} score={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
