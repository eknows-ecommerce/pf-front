import { useSelector } from 'react-redux'
import Search from '../../components/search/Search'
import FilaLibro from './FilaLibro'
import { useEffect, useRef } from 'react'
import useSearch from '../../hooks/useSearch'
import Paginacion from 'components/paginacion/Paginacion'
import usePaginacion from 'hooks/usePaginacion'

export default function Productos() {
  const { libros } = useSelector(({ librosStore }) => librosStore)
  const show = useRef(null)
  const { search, handleSearch } = useSearch()
  const {
    paginas,
    paginaAnterior,
    paginaSeleccionada,
    paginaSiguiente,
    handleTotal,
  } = usePaginacion()
  useEffect(() => {
    handleTotal(libros.length)
  }, [paginas.totalPages])

  const handleClick = () => {
    show.current.classList.toggle('hidden')
  }
  return (
    <div>
      <div>
        <form className="hidden mb-0 lg:flex">
          <Search search={search} handleSearch={handleSearch} />
        </form>
      </div>
      <div className="flex justify-end flex-1 w-0 lg:hidden">
        <div ref={show} className="hidden">
          <Search search={search} handleSearch={handleSearch} />
        </div>
        <button
          className="p-2 text-gray-500 bg-gray-100 rounded-full"
          type="button"
        >
          <svg
            onClick={handleClick}
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="sticky left-0 p-4 text-left bg-white"></th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">
                  Titulo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">
                  Autor
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">
                  Estado
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">Precio</div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">Stock</div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">ID</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {libros
              ?.map((libro) => (
                <FilaLibro
                  key={libro.id}
                  titulo={libro.titulo}
                  autor={libro.autor}
                  estado={libro.isAvail}
                  precio={libro.precio}
                  stock={libro.stock}
                  id={libro.id}
                />
              ))
              .slice((paginas.currentPage - 1) * 6, paginas.currentPage * 6)}
          </tbody>
        </table>
        {paginas.totalPages && (
          <Paginacion
            paginaAnterior={paginaAnterior}
            paginaSiguiente={paginaSiguiente}
            paginas={paginas}
          />
        )}
      </div>
    </div>
  )
}
