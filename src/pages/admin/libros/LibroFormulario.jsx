import { useState, useEffect } from 'react'

export default function LibroFormulario({
  categorias,
  tags,
  setNuevoLibro,
  libro,
  crearNuevoLibro,
  formulario,
  setLibroSeleccionado,
}) {
  // const [libroActualizar, setLibroActualizar] = useState(libro)
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])
  const [tagsSeleccionados, setTagsSeleccionados] = useState([])
  // let libroObj = { ...libro }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formulario])

  const handleChange = (e, setter, property, value) => {
    setter({ ...libro, [property]: value })
  }

  const handleCategorias = (e, id) => {
    if (formulario === 'NUEVO') {
      console.log(id)
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
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'titulo',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'titulo',
                                e.target.value
                              )
                      }
                      value={libro.titulo ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Autor
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'autor',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'autor',
                                e.target.value
                              )
                      }
                      value={libro.autor ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Editorial
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'editorial',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'editorial',
                                e.target.value
                              )
                      }
                      value={libro.editorial ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Lenguaje
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'lenguaje',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'lenguaje',
                                e.target.value
                              )
                      }
                      value={libro.lenguaje ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Cantidad de páginas
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'paginas',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'paginas',
                                e.target.value
                              )
                      }
                      value={libro.paginas ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Detalles
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'detalles',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'detalles',
                                e.target.value
                              )
                      }
                      value={libro.detalles ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Fecha de publicación
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'fechaPublicacion',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'fechaPublicacion',
                                e.target.value
                              )
                      }
                      value={libro.fechaPublicacion ?? ''}
                      type="date"
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Portada ????
                    </p>
                    <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Precio
                    </p>
                    <input
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'precio',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'precio',
                                e.target.value
                              )
                      }
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
                      onChange={
                        formulario === 'NUEVO'
                          ? (e) =>
                              handleChange(
                                e,
                                setNuevoLibro,
                                'stock',
                                e.target.value
                              )
                          : (e) =>
                              handleChange(
                                e,
                                setLibroSeleccionado,
                                'stock',
                                e.target.value
                              )
                      }
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
