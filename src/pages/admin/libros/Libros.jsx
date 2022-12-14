import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll as getAllLibros } from 'features/actions/libros'
import useSearch from 'hooks/useSearch'
import { Link } from 'react-router-dom'

import {
  setLimite,
  setPaginasTotales,
  setPaginaActual,
  count,
} from 'features/reducers/librosSlice'

import Item from './Item'
import SearchPanelAdmin from '../SearchPanelAdmin'

import Paginacion2 from 'components/Paginacion/Paginacion2'

function Libros() {
  const [formulario, setFormulario] = useState('')

  const [setDeshabilitarItemModal] = useState(false)
  const { search, handleSearch } = useSearch()

  const { libros, msg, limite, paginaActual, buscarPor } = useSelector(
    ({ librosStore }) => librosStore
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLimite(10))
  }, [dispatch])

  useEffect(() => {
    dispatch(setPaginasTotales({ count, limite }))
  }, [dispatch])

  useEffect(() => {
    dispatch(setPaginaActual(1))
  }, [dispatch])

  useEffect(() => {
    let query = ''

    if (buscarPor) query += `buscarPor=${buscarPor}&`

    if (search) {
      query += `search=${search}&`
    }

    query += `limite=10&`
    query += `pagina=${paginaActual}`
    dispatch(getAllLibros(query))
  }, [search, buscarPor, limite, paginaActual, dispatch])

  useEffect(() => {
    if (msg !== '') {
      alert(msg)
    }
  }, [msg])

  return (
    <>
      <div className="overflow-x-auto pt-2">
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Libros
              </p>
              <div>
                <Link to="crear">
                  <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                      Nuevo Libro
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </Link>

                {(formulario === 'nuevo' || formulario === 'editar') && (
                  <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                      Todos los libros
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            {formulario === '' && (
              <>
                <SearchPanelAdmin
                  search={search}
                  handleSearch={handleSearch}
                  placeholder="Buscar por titulo"
                />
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="h-16 w-full text-sm leading-none text-gray-800">
                      <th className="font-normal text-left pl-4">Libro</th>
                      <th className="font-normal text-left pl-12">Estado</th>
                      <th className="font-normal text-left pl-12">Stock</th>
                      <th className="font-normal text-left pl-20">Precio</th>
                      <th className="font-normal text-left pl-20">ID</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {libros?.map((libro) => (
                      <Item
                        key={crypto.randomUUID()}
                        // setLibro={setLibro}
                        setFormulario={setFormulario}
                        setDeshabilitarItemModal={setDeshabilitarItemModal}
                        {...libro}
                      />
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
      <Paginacion2 />
    </>
  )
}

export default Libros
