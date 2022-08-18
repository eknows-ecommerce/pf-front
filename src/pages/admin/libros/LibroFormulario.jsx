import { useState, useEffect } from 'react'
import {
  validarInputNumero,
  validarInputText,
} from 'assets/validacionesInputs/validaciones'

export default function LibroFormulario({
  categorias,
  tags,
  setNuevoLibro,
  libro,
  crearNuevoLibro,
  formulario,
  setLibroSeleccionado,
}) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])
  const [tagsSeleccionados, setTagsSeleccionados] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const [checkFile, setCheckFile] = useState(false)

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0])
    setCheckFile(true)
  }

  const imagesubmission = () => {
    if (checkFile) {
      alert('Imagen subida')
      console.log(selectedFile)
    } else {
      alert('Elija una imagen')
    }
  }

  function handleChange(e, setter, property, value) {
    if (property === libro.autor || libro.editorial || libro.lenguaje) {
      if (validarInputText(value)) {
        setter({ ...libro, [property]: value })
      }
    } else {
      validarInputNumero(e.target.value)
      setter({ ...libro, [property]: value })
    }
  }

  const handleInput = (e) => {
    if (validarInputText(e.target.value)) {
      setNuevoLibro({ ...libro, [e.target.name]: e.target.value })
    } else {
      setNuevoLibro({ ...libro, [e.target.name]: libro[e.target.name] })
    }
  }
  const handleNumber = (e) => {
    if (validarInputNumero(e.target.value)) {
      setNuevoLibro({ ...libro, [e.target.name]: e.target.value })
    } else {
      setNuevoLibro({ ...libro, [e.target.name]: libro[e.target.name] })
    }
  }
  useEffect(() => {
    if (formulario === 'EDITAR') {
      setCategoriasSeleccionadas(libro.CategoriaLibro.map((cat) => cat.id))
      setTagsSeleccionados(libro.TagLibro.map((tag) => tag.id))
      setLibroSeleccionado({
        ...libro,
        categorias: categoriasSeleccionadas,
        tags: tagsSeleccionados,
      })
    }
  }, [])

  const handleCategorias = (e, id) => {
    if (formulario === 'NUEVO') {
      if (e.target.checked) {
        if (!libro.categorias.includes(id)) {
          setNuevoLibro({ ...libro, categorias: [...libro.categorias, id] })
        }
      } else {
        const categoriasFilter = libro.categorias.filter((i) => i !== id)
        setNuevoLibro({ ...libro, categorias: categoriasFilter })
      }
    } else {
      if (e.target.checked) {
        if (!libro.categorias.includes(id)) {
          setLibroSeleccionado({
            ...libro,
            categorias: [...libro.categorias, id],
          })
        }
      } else {
        const categoriasFilter = libro.categorias.filter((i) => i !== id)
        setLibroSeleccionado({ ...libro, categorias: categoriasFilter })
      }
      libro.categorias = categoriasSeleccionadas
    }
  }
  const handleTags = (e, id) => {
    if (formulario === 'NUEVO') {
      if (e.target.checked) {
        if (!libro.tags.includes(id)) {
          setNuevoLibro({ ...libro, tags: [...libro.tags, id] })
        }
      } else {
        const tagsFilter = libro.tags.filter((i) => i !== id)
        setNuevoLibro({ ...libro, tags: tagsFilter })
      }
    } else {
      if (e.target.checked) {
        if (!libro.tags.includes(id)) {
          setLibroSeleccionado({ ...libro, tags: [...libro.tags, id] })
        }
      } else {
        const tagsFilter = libro.tags.filter((i) => i !== id)
        setLibroSeleccionado({ ...libro, tags: tagsFilter })
      }
      libro.tags = tagsSeleccionados
    }
  }
  return (
    <form onSubmit={(e) => crearNuevoLibro(e, libro)} className="px-2 py-5 ">
      <div className="flex flex-no-wrap items-start">
        <div className="w-full">
          <div className="py-4 px-2">
            <div className="bg-white rounded shadow py-7">
              <div className="hidden lg:block md:hidden"></div>
              <div className="mt-10 px-7">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  {formulario === 'NUEVO' ? 'Nuevo libro' : 'Editar libro'}
                </p>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 mt-7 ">
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Título
                    </p>
                    <input
                      name="titulo"
                      value={libro.titulo ?? ''}
                      onChange={handleInput}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Autor
                    </p>
                    <input
                      name="autor"
                      onChange={handleInput}
                      value={libro.autor ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Editorial
                    </p>
                    <input
                      name="editorial"
                      onChange={handleInput}
                      value={libro.editorial ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Lenguaje
                    </p>
                    <input
                      name="lenguaje"
                      onChange={handleInput}
                      value={libro.lenguaje ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Cantidad de páginas
                    </p>
                    <input
                      name="paginas"
                      onChange={handleNumber}
                      value={libro.paginas ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Detalles
                    </p>
                    <input
                      name="detalles"
                      onChange={handleInput}
                      value={libro.detalles ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Fecha de publicación
                    </p>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        datepicker
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Portada
                    </p>
                    <>
                      <div className="grid justify-items-center">
                        <div className="flex items-center justify-center">
                          <div className="h-20 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
                            <input
                              type="file"
                              value={libro.portada}
                              name="file"
                              onChange={imageHandler}
                              className="z-20 opacity-0 cursor-pointer h-full w-full"
                            />
                            <div className="absolute flex justify-center items-center gap-2">
                              <img
                                className={`h-10 w-10 rounded-full ${
                                  checkFile ? 'opacity-1' : 'opacity-0'
                                }`}
                                src={
                                  selectedFile
                                    ? URL.createObjectURL(selectedFile)
                                    : null
                                }
                                alt="caratula"
                              />
                              <span className="text-[18px] w-56 truncate">
                                {checkFile
                                  ? selectedFile.name
                                  : 'choose a file'}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={imagesubmission}
                            className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Precio
                    </p>
                    <input
                      name="precio"
                      onChange={handleNumber}
                      value={libro.precio ?? ''}
                      type="number"
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Stock
                    </p>
                    <input
                      name="stock"
                      onChange={handleNumber}
                      value={libro.stock ?? ''}
                      type="number"
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="col-span-full w-full">
                    <label className="text-sm text-left font-medium leading-none text-gray-800">
                      Categorias
                    </label>
                    <div className="flex flex-wrap justify-start items-center mt-2">
                      <div className="flex flex-wrap justify-between items-center w-full border rounded border-gray-300 md:px-6 px-3 py-1 lg:gap-x-2 md:gap-x-2 gap-x-1">
                        {categorias?.map((categoria) => (
                          <div
                            key={categoria.id}
                            className="flex items-center space-x-2 text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded"
                          >
                            <input
                              type="checkbox"
                              name={categoria.nombre}
                              className="cursor-pointer"
                              onChange={(e) =>
                                handleCategorias(e, categoria.id)
                              }
                              defaultChecked={categoriasSeleccionadas.includes(
                                categoria.id
                              )}
                            />
                            <label htmlFor={categoria.nombre}>
                              {categoria.nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full w-full">
                    <label className="text-sm text-left font-medium leading-none text-gray-800">
                      Tags
                    </label>
                    <div className="flex flex-wrap justify-start items-center mt-2">
                      <div className="flex flex-wrap justify-between items-center w-full border rounded border-gray-300 md:px-6 px-3 py-1 lg:gap-x-2 md:gap-x-2 gap-x-1">
                        {tags?.map((tag) => (
                          <label
                            htmlFor={tag.id}
                            key={tag.id}
                            className="flex items-center space-x-2 text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded"
                          >
                            <input
                              type="checkbox"
                              name={tag.nombre}
                              id={tag.id}
                              className="cursor-pointer"
                              onChange={(e) => handleTags(e, tag.id)}
                              defaultChecked={tagsSeleccionados.includes(
                                tag.id
                              )}
                            />
                            <span>{tag.nombre}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-gray-300 mt-2 mb-10 px-7">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Resumen
                </p>
                <div className="my-5 border border-gray-300 rounded">
                  <textarea
                    className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                    placeholder="Resumen del libro.."
                    value={libro.resumen}
                    onChange={
                      formulario === 'NUEVO'
                        ? (e) =>
                            handleChange(
                              e,
                              setNuevoLibro,
                              'resumen',
                              e.target.value
                            )
                        : (e) =>
                            handleChange(
                              e,
                              setLibroSeleccionado,
                              'resumen',
                              e.target.value
                            )
                    }
                  />
                </div>
                <div className="flex justify-center space-x-10 items-center">
                  <div className="flex items-center space-x-2">
                    {formulario === 'NUEVO' ? (
                      <>
                        <input
                          type="checkbox"
                          className="w-full border border-gray-300 rounded outline-none focus:bg-gray-50"
                          defaultChecked={!libro.isAvail}
                          onClick={(e) =>
                            setNuevoLibro({
                              ...libro,
                              isAvail: !libro.isAvail,
                            })
                          }
                        />
                        <label>No Disponible</label>
                      </>
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          className="w-full border border-gray-300 rounded outline-none focus:bg-gray-50"
                          defaultChecked={!libro.isAvail}
                          onClick={(e) =>
                            setLibroSeleccionado({
                              ...libro,
                              isAvail: !libro.isAvail,
                            })
                          }
                        />
                        <label>No Disponible</label>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full">
                  Limpiar
                </button>
                <button
                  type="submit"
                  className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
