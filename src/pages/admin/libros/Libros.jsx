import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, update, getAll } from 'features/actions/libros'
import useSearch from 'hooks/useSearch'

import Item from './Item'
import LibroFormulario from './LibroFormulario'
import DisponibilidadModal from './DisponibilidadModal'
import SearchPanelAdmin from '../SearchPanelAdmin'

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
  const [formulario, setFormulario] = useState('') // boton nuevo libro
  // const [nuevoLibro, setNuevoLibro] = useState(initialState)
  // const [libroSeleccionado, setLibroSeleccionado] = useState({})
  const [libro, setLibro] = useState(initialState)
  const [deshabilitarItemModal, setDeshabilitarItemModal] = useState(false)
  const { search, handleSearch } = useSearch()

  const { libros } = useSelector(({ librosStore }) => librosStore)
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  const { tags } = useSelector(({ tagsStore }) => tagsStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(`titulo=${search}`))
  }, [dispatch, search])

  // const deshabilitarItem = () => {
  //   let libroObj = {
  //     ...libroSeleccionado,
  //     isAvail: !libroSeleccionado.isAvail,
  //   }
  //   dispatch(update(libroObj))
  //   setLibroSeleccionado({})
  //   setDeshabilitarItemModal(false)
  // }

  // const deshabilitarLibro = (libro) => {
  //   setLibroSeleccionado(libro)
  //   setDeshabilitarItemModal(true)
  // }

  const crearNuevoLibro = (e, libroObj) => {
    e.preventDefault()
    if (formulario === 'nuevo') dispatch(create(libroObj))
    if (formulario === 'editar') dispatch(update(libroObj))
    setLibro(initialState)
    // setNuevoLibro(initialState)
    setFormulario('')
    // if (
    //   libroObj.autor !== '' &&
    //   /^[A-Za-z\s]+$/g.test(libroObj.autor) &&
    //   libroObj.titulo !== '' &&
    //   libroObj.precio !== '' &&
    //   parseInt(libroObj.precio) &&
    //   libroObj.stock !== '' &&
    //   parseInt(libroObj.stock) &&
    //   libroObj.paginas !== '' &&
    //   parseInt(libroObj.paginas) &&
    //   libroObj.editorial !== '' &&
    //   /^[A-Za-z\s]+$/g.test(libroObj.editorial) &&
    //   libroObj.lenguaje !== '' &&
    //   /^[A-Za-z\s]+$/g.test(libroObj.lenguaje) &&
    //   libroObj.resumen !== '' &&
    //   libroObj.detalles !== '' &&
    //   libroObj.categorias > 0 &&
    //   libroObj.tags > 0
    // )
  }

  return (
    <>
      {/* {deshabilitarItemModal && (
        <DisponibilidadModal
          libroSeleccionado={libroSeleccionado}
          setDeshabilitarItemModal={setDeshabilitarItemModal}
          deshabilitarItem={deshabilitarItem}
          item={libroSeleccionado.titulo}
          tipo="libro"
        />
      )} */}
      <div className="overflow-x-auto pt-2">
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Libros
              </p>
              <div>
                {formulario === '' && (
                  <button
                    onClick={() => setFormulario('nuevo')}
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

                {(formulario === 'nuevo' || formulario === 'editar') && (
                  <button
                    onClick={() => {
                      setFormulario('')
                      setLibro(initialState)
                    }}
                    className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  >
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
                        setLibro={setLibro}
                        setFormulario={setFormulario}
                        {...libro}
                        // deshabilitarLibro={deshabilitarLibro}
                        // setLibroSeleccionado={setLibroSeleccionado}
                      />
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {formulario !== '' && (
              <LibroFormulario
                libro={libro}
                setLibro={setLibro}
                tags={tags}
                categorias={categorias}
                formulario={formulario}
                crearNuevoLibro={crearNuevoLibro}
              />
            )}

            {/* {formulario === 'EDITAR' && (
              <LibroFormulario
                categorias={categorias}
                tags={tags}
                libro={libroSeleccionado}
                setLibroSeleccionado={setLibroSeleccionado}
                formulario={formulario}
                crearNuevoLibro={crearNuevoLibro}
              />
            )}
            {formulario === 'NUEVO' && (
              <LibroFormulario
                categorias={categorias}
                tags={tags}
                setNuevoLibro={setNuevoLibro}
                libro={nuevoLibro}
                crearNuevoLibro={crearNuevoLibro}
                formulario={formulario}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Libros
