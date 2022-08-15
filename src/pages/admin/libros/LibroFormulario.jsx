export default function LibroFormulario({
  categorias,
  tags,
  setNuevoLibro,
  nuevoLibro,
  crearNuevoLibro,
}) {
  return (
    <form onSubmit={crearNuevoLibro} className="px-2 py-5 ">
      <div className="flex flex-no-wrap items-start">
        <div className="w-full">
          <div className="py-4 px-2">
            <div className="bg-white rounded shadow py-7">
              <div className="hidden lg:block md:hidden"></div>
              <div className="mt-10 px-7">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  Detalle de libro
                </p>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 mt-7 ">
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Título
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })
                      }
                      value={nuevoLibro.titulo}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Autor
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({ ...nuevoLibro, autor: e.target.value })
                      }
                      value={nuevoLibro.autor}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Editorial
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          editorial: e.target.value,
                        })
                      }
                      value={nuevoLibro.editorial}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Lenguaje
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          lenguaje: e.target.value,
                        })
                      }
                      value={nuevoLibro.lenguaje}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Cantidad de páginas
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          paginas: e.target.value,
                        })
                      }
                      value={nuevoLibro.paginas}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Detalles
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          detalles: e.target.value,
                        })
                      }
                      value={nuevoLibro.detalles}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Fecha de publicación
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          fechaPublicacion: e.target.value,
                        })
                      }
                      value={nuevoLibro.fechaPublicacion}
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
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          precio: e.target.value,
                        })
                      }
                      value={nuevoLibro.precio}
                      type="number"
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Stock
                    </p>
                    <input
                      onChange={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          stock: e.target.value,
                        })
                      }
                      value={nuevoLibro.stock}
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
                            onClick={() => {
                              let arr = [...nuevoLibro.categorias, categoria.id]
                              setNuevoLibro({
                                ...nuevoLibro,
                                categorias: [...new Set(arr)],
                              })
                            }}
                            className="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded cursor-pointer"
                          >
                            {categoria.nombre}
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
                          <div
                            key={tag.id}
                            onClick={() => {
                              let arr = [...nuevoLibro.tags, tag.id]
                              setNuevoLibro({
                                ...nuevoLibro,
                                tags: [...new Set(arr)],
                              })
                            }}
                            className="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded cursor-pointer"
                          >
                            {tag.nombre}
                          </div>
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
                    onChange={(e) =>
                      setNuevoLibro({
                        ...nuevoLibro,
                        resumen: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-center space-x-10 items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-full border border-gray-300 rounded outline-none focus:bg-gray-50"
                      defaultChecked={!nuevoLibro.isAvail}
                      onClick={(e) =>
                        setNuevoLibro({
                          ...nuevoLibro,
                          isAvail: !nuevoLibro.isAvail,
                        })
                      }
                    />
                    <label>No Disponible</label>
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
