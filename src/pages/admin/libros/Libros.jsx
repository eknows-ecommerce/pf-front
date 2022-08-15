import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, create, update } from 'features/actions/libros'

import Item from './Item'
import SearchBar from '../SearchBar'
import LibroFormulario from './LibroFormulario'
import EliminarItemModal from '../EliminarItemModal'

const initialState = {
  titulo: '',
  autor: '',
  resumen: '',
  precio: 0,
  isAvail: true,
  stock: 0,
  editorial: '',
  fechaPublicacion: new Date(),
  paginas: 0,
  detalles: '',
  lenguaje: '',
  portada: '',
  categorias: [],
  tags: [],
}

function Libros() {
  const [formulario, setFormulario] = useState(false)
  const [nuevoLibro, setNuevoLibro] = useState(initialState)
  const [libroSeleccionado, setLibroSeleccionado] = useState({})
  const [eliminarItemModal, setEliminarItemModal] = useState(false)

  const { libros, busqueda } = useSelector(({ librosStore }) => librosStore)
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  const { tags } = useSelector(({ tagsStore }) => tagsStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(`titulo=${busqueda}`))
  }, [dispatch, busqueda])

  const eliminarItem = () => {
    let libroObj = {
      ...libroSeleccionado,
      isAvail: false,
    }
    dispatch(update(libroObj))
    setLibroSeleccionado({})
    setEliminarItemModal(false)
  }

  const deshabilitarLibro = (libro) => {
    setLibroSeleccionado(libro)
    setEliminarItemModal(true)
  }

  const crearNuevoLibro = (e) => {
    e.preventDefault()
    dispatch(create(nuevoLibro))
    setFormulario(false)
    setNuevoLibro(initialState)
  }

  return (
    <>
      {eliminarItemModal && (
        <EliminarItemModal
          setEliminarItemModal={setEliminarItemModal}
          eliminarItem={eliminarItem}
          item={libroSeleccionado.titulo}
          tipo="libro"
        />
      )}

      <div className="overflow-x-auto xl:px-20 pt-2">
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Libros
              </p>
              <div>
                {formulario ? (
                  <button
                    onClick={() => setFormulario(false)}
                    className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  >
                    <p className="text-sm font-medium leading-none text-white">
                      Todos los libros
                    </p>
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
                ) : (
                  <button
                    onClick={() => setFormulario(true)}
                    className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  >
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
                )}
              </div>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            {formulario ? (
              <LibroFormulario
                categorias={categorias}
                tags={tags}
                setNuevoLibro={setNuevoLibro}
                nuevoLibro={nuevoLibro}
                crearNuevoLibro={crearNuevoLibro}
              />
            ) : (
              <>
                <SearchBar />
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
                        key={libro.id}
                        {...libro}
                        deshabilitarLibro={deshabilitarLibro}
                      />
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Libros
