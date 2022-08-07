/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardLibro from '../../components/cards/CardLibro'
import { getAll } from '../../features/actions/libros'
import Paginacion from '../../components/Paginacion/Paginacion'
import usePaginacion from '../../hooks/usePaginacion'

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

  useEffect(() => {
    dispatch(getAll(`offset=0`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleTotal(count)
    dispatch(getAll(`offset=${(paginas.currentPage - 1) * 6}`))
  }, [count, paginas.currentPage])

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="sticky top-0 z-20 shadow-xl cursor-pointer">
            <details open className="overflow-hidden rounded">
              <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 ">
                <span className="text-sm font-medium">Toggle Filters</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <form
                action=""
                className="border-t border-gray-200 lg:border-t-0"
              >
                <fieldset>
                  <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                    Type
                  </legend>
                  <div className="px-5 py-6 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />
                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Toy
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="game"
                        className="ml-3 text-sm font-medium"
                      >
                        Game
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="outdoor"
                        type="checkbox"
                        name="type[outdoor]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="outdoor"
                        className="ml-3 text-sm font-medium"
                      >
                        Outdoor
                      </label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-xs text-gray-500 underline"
                      >
                        Reset Type
                      </button>
                    </div>
                  </div>
                </fieldset>
                <div>
                  <fieldset>
                    <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                      Age
                    </legend>
                    <div className="px-5 py-6 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="3+"
                          type="checkbox"
                          name="age[3+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="3+"
                          className="ml-3 text-sm font-medium"
                        >
                          3+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="8+"
                          type="checkbox"
                          name="age[8+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="8+"
                          className="ml-3 text-sm font-medium"
                        >
                          8+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="12+"
                          type="checkbox"
                          name="age[12+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="12+"
                          className="ml-3 text-sm font-medium"
                        >
                          12+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="16+"
                          type="checkbox"
                          name="age[16+]"
                          className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="16+"
                          className="ml-3 text-sm font-medium"
                        >
                          16+
                        </label>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          className="text-xs text-gray-500 underline"
                        >
                          Reset Age
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                  <button
                    name="reset"
                    type="button"
                    className="text-xs font-medium text-gray-600 underline rounded"
                  >
                    Reset All
                  </button>
                  <button
                    name="commit"
                    type="button"
                    className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>
          <div className="lg:col-span-3 ">
            <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl">
              <p className="text-sm font-medium  px-2 py-3 ">
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
