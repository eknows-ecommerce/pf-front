/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardLibro from '../../components/cards/CardLibro'
import { getAll } from '../../features/actions/libros'
import Paginacion from '../../components/Paginacion/Paginacion'
import usePaginacion from '../../hooks/usePaginacion'
import { useLocation } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'
import Filtros from '../../components/FiltroCategorias/Filtros'

function Home() {
  const dispatch = useDispatch()
  const {
    paginas,
    paginaAnterior,
    paginaSeleccionada,
    paginaSiguiente,
    handleTotal,
  } = usePaginacion()
  const { libros, count } = useSelector(({ librosStore }) => librosStore)
  const { busqueda } = useSelector(({ librosStore }) => librosStore)

  let url = useLocation()

  useEffect(() => {
    if (new RegExp('\\?').test(url.search)) {
      handleTotal(count)
      dispatch(
        getAll(`titulo=${busqueda}&offset=${(paginas.currentPage - 1) * 6}`)
      )
    } else {
      dispatch(getAll(`offset=${(paginas.currentPage - 1) * 6}`))
      handleTotal(count)
    }
  }, [paginas.currentPage, count, busqueda])

  useEffect(() => {
    dispatch(getAll(`offset=0`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <Filtros />
          <div className="lg:col-span-3 ">
            <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl sticky top-0">
              <p className="text-sm font-medium  px-2 py-3">
                <span className="sm:inline">Vistos </span>
                {paginas.totalPages === paginas.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {' '}
                      {(paginas.currentPage - 1) * 6 + (count % 6)}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : (
                  <>
                    <span className="text-sm text-rosadito-500">
                      {paginas.currentPage * 6}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm text-rosadito-500">{count}</span>{' '}
                    Libros
                  </>
                )}
              </p>
              <div className="ml-4 bg-gray-100">
                <label htmlFor="SortBy" className="sr-only">
                  Sort
                </label>
                <select
                  id="SortBy"
                  name="sort_by"
                  className="text-sm bg-gray-200 border-gray-200 font-medium rounded"
                >
                  <option readOnly="">Sort</option>
                  <option value="title-asc">Title, A-Z</option>
                  <option value="title-desc">Title, Z-A</option>
                  <option value="price-asc">Price, Low-High</option>
                  <option value="price-desc">Price, High-Low</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-1 gap-px mt-4 bg-gray-100 border border-gray-100 sm:grid-cols-2 lg:grid-cols-3">
              {libros &&
                libros.map((libro) => (
                  <CardLibro
                    key={crypto.randomUUID()}
                    id={libro.id}
                    portada={libro.portada}
                    titulo={libro.titulo}
                    descuento={libro.descuento}
                    precio={libro.precio}
                  />
                ))}
            </div>
            <div className="grid bg-gray-200 text-sm border border-gray-200 font-bold rounded shadow-xl my-3">
              {count !== 0 && (
                <Paginacion
                  paginaAnterior={paginaAnterior}
                  paginaSiguiente={paginaSiguiente}
                  paginaSeleccionada={paginaSeleccionada}
                  paginas={paginas}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
