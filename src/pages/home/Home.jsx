/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardLibro from '../../components/cards/CardLibro'
import { getAll } from '../../features/actions/libros'
import Paginacion from 'components/Paginacion/Paginacion'
import usePaginacion from 'hooks/usePaginacion'
import Swal from 'sweetalert2'
import Filtros from 'components/filtros/Filtros'

function Home() {
  const [listaCarrito, setListaCarrito] = useState(
    JSON.parse(localStorage.getItem('carrito')) || []
  )

  const dispatch = useDispatch()
  const {
    paginas,
    paginaAnterior,
    paginaSeleccionada,
    paginaSiguiente,
    handleTotal,
  } = usePaginacion()
  const { libros, count, busqueda } = useSelector(
    ({ librosStore }) => librosStore
  )
  // const { busqueda } = useSelector(({ librosStore }) => librosStore)
  const queryCategorias = useSelector(
    ({ librosStore }) => librosStore.categorias
  )
  const queryTags = useSelector(({ librosStore }) => librosStore.tags)
  const queryRangoPrecios = useSelector(
    ({ librosStore }) => librosStore.rangoPrecios
  )

  const [sorter, setSort] = useState(['Sort', 'asc'])

  useEffect(() => {
    const [sort, dir] = sorter
    let sortQuery = sort !== 'Sort' ? `&orden=${sort}&direcion=${dir}` : ''
    let query =
      queryCategorias && queryCategorias !== 'categorias'
        ? `&${queryCategorias}`
        : ''

    query += queryTags && queryTags !== 'tags' ? `&${queryTags}` : ''

    query += queryRangoPrecios ? `&${queryRangoPrecios}` : ''
    console.log(query)
    if (!busqueda) {
      dispatch(getAll(`offset=${paginas.currentPage - 1}` + sortQuery + query))
      handleTotal(count)
    }
    if (busqueda) {
      dispatch(
        getAll(
          `titulo=${busqueda}&offset=${paginas.currentPage - 1}` +
            sortQuery +
            query
        )
      )
      handleTotal(count)
    }
  }, [
    paginas.currentPage,
    count,
    busqueda,
    queryCategorias,
    queryTags,
    queryRangoPrecios,
    sorter,
  ])

  useEffect(() => {
    paginaSeleccionada(1)
  }, [busqueda, queryCategorias, queryTags, queryRangoPrecios])

  useEffect(() => {
    dispatch(getAll(`offset=0`))
  }, [])

  const handleCarrito = (id, precio) => {
    Swal.fire('Agregar al carrito', 'Se ha agregado exitosamente', 'success')
    const existe = listaCarrito.find((item) => item.id === id)
    if (!existe) {
      const elemento = [...listaCarrito, { id, cantidad: 1, total: 1 * precio }]
      setListaCarrito(elemento)
      localStorage.setItem('carrito', JSON.stringify(elemento))
    }
  }

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <Filtros />
          <div className="lg:col-span-3 ">
            <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl sticky lg:top-0 top-14">
              <p className="text-sm font-medium px-2 py-3">
                <span className="sm:inline">Vistos </span>
                {paginas.totalPages === paginas.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {' '}
                      {(paginas.currentPage - 1) * 6 +
                        (count === 6 ? count : count % 6)}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : count ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {paginas.currentPage * 6}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      0
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      0
                    </span>{' '}
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
                  onChange={(v) => {
                    setSort(v.target.value.split('-'))
                  }}
                >
                  <option readOnly="">Sort</option>
                  <option value="titulo-asc">Title, A-Z</option>
                  <option value="titulo-desc">Title, Z-A</option>
                  <option value="precio-asc">Price, Low-High</option>
                  <option value="precio-desc">Price, High-Low</option>
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
                    handleCarrito={() => handleCarrito(libro.id, libro.precio)}
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
