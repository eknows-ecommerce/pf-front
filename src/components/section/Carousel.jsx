import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  Slide,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Item from './Item'


import { getAllKpage } from 'features/actions/categorias'
import { useEffect, useState } from 'react'
import SliderCarousel from './SliderCarousel'
import { useLocation } from 'react-router-dom'
const URL = process.env.REACT_APP_URL

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel({ categoria }) {
  const [books, setBooks] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fcn = async () => {
      let { data } =
        location.pathname === '/views'
          ? await axios.get(
              `${URL}/libros?formatos=[2,3]&categorias=[${categoria.id}]`
            )
          : await axios.get(
              `${URL}/libros?formatos=[1]&categorias=[${categoria.id}]`
            )
      setBooks(data.libros)
      console.log(data)
    }
    fcn()
    if (window.scrollY) {
      window.scroll(0, 0) // Restablece la posición de desplazamiento en la parte superior izquierda del documento
    }
  }, [location.pathname, categoria.id])

  return (
    <div className="container mx-auto w-full">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4 w-full">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden w-full">
              <h2 className="text-2xl font-bold  font-comforta-300 text-gray-900 md:text-2xl">
              {categoria.nombre}
              </h2>
              <Slider className="border-gray-100 w-full shadow-black shadow-2xl">
                <div
                  id="slider"
                  className="h-xl w-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {books?.length > 0 &&
                    books.map((l, i) => (
                      <Slide key={crypto.randomUUID()} index={i}>
                        <Link to={`/detalle/${l.id}`}>
                        <div className="block box-border h-full m-0 list-none focus:outline-none float-left">
                          <img
                              src={l.portada}
                              alt={l.titulo}
                              className="object-cover object-center w-full"
                          />
                          </div>
                        </Link>
                      </Slide>                 
                        
                    ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}
