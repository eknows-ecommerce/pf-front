import { useState, useEffect } from 'react'
import axios from 'axios'

import useUploadImage from 'hooks/useUploadImage'
import {
  validarInputNumero,
  validarInputText,
} from 'assets/validacionesInputs/validaciones'

const URL_API = process.env.REACT_APP_URL_API_CLOUDINARY

export default function LibroFormulario({
  categorias,
  tags,
  setLibro,
  libro,
  crearNuevoLibro,
  formulario,
}) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])
  const [tagsSeleccionados, setTagsSeleccionados] = useState([])
  const [imageInput, setImageInput] = useState(null)
  const { preview, handleImage } = useUploadImage()

  useEffect(() => {
    if (libro.CategoriaLibro || libro.TagLibro) {
      let cats = libro.CategoriaLibro.map((cat) => cat.id)
      let tags = libro.TagLibro.map((tag) => tag.id)
      setCategoriasSeleccionadas([...cats])
      setTagsSeleccionados([...tags])
    }
  }, [libro])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!imageInput) {
        const libroSinPortada = {
          ...libro,
          portada: 'https://i.imgur.com/md6Ac63.jpeg',
          categorias: categoriasSeleccionadas,
          tags: tagsSeleccionados,
        }
        crearNuevoLibro(e, libroSinPortada)
        alert('Libro sin portada creado')
        setCategoriasSeleccionadas([])
        setTagsSeleccionados([])
      } else {
        const file = imageInput
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'Images')
        const res = await axios.post(URL_API, formData)
        const libroPortada = {
          ...libro,
          portada: res.data.secure_url,
          categorias: categoriasSeleccionadas,
          tags: tagsSeleccionados,
        }
        crearNuevoLibro(e, libroPortada)
        alert('Libro con portada creado')
        setCategoriasSeleccionadas([])
        setTagsSeleccionados([])
      }
    } catch (error) {
      console.log(error)
      alert('Error al enviar formulario')
    }
  }

  const handleInputChange = (e) => {
    const { type, name, value, files, checked } = e.target
    switch (type) {
      case 'text':
        // -- validaciones --
        setLibro({ ...libro, [name]: value })
        break
      case 'number':
        // -- validaciones --
        setLibro({ ...libro, [name]: value })
        break
      case 'date':
        // -- validaciones --
        setLibro({ ...libro, [name]: value })
        break
      case 'file':
        handleImage(e)
        setImageInput(files[0])
        break
      case 'textarea':
        // -- validaciones --
        setLibro({ ...libro, [name]: value })
        break
      case 'checkbox':
        setLibro({ ...libro, [name]: checked ? false : true })
        break
      default:
        break
    }
  }

  const handleCategorias = (e) => {
    const { id } = e.target
    if (categoriasSeleccionadas.includes(+id)) {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((cat) => cat !== +id)
      )
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, +id])
    }
  }

  const handleTags = (e) => {
    const { id } = e.target
    if (tagsSeleccionados.includes(+id)) {
      setTagsSeleccionados(tagsSeleccionados.filter((tag) => tag !== +id))
    } else {
      setTagsSeleccionados([...tagsSeleccionados, +id])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-2 py-5 ">
      <div className="flex flex-no-wrap items-start">
        <div className="w-full">
          <div className="py-4 px-2">
            <div className="bg-white rounded shadow py-7">
              <div className="hidden lg:block md:hidden"></div>
              <div className="mt-10 px-7">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  {formulario === 'nuevo' ? 'Nuevo libro' : 'Editar libro'}
                </p>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 mt-7 ">
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Título
                    </p>
                    <input
                      type="text"
                      name="titulo"
                      value={libro.titulo || ''}
                      onChange={handleInputChange}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Autor
                    </p>
                    <input
                      type="text"
                      name="autor"
                      onChange={handleInputChange}
                      value={libro.autor || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Editorial
                    </p>
                    <input
                      type="text"
                      name="editorial"
                      onChange={handleInputChange}
                      value={libro.editorial || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Lenguaje
                    </p>
                    <input
                      type="text"
                      name="lenguaje"
                      onChange={handleInputChange}
                      value={libro.lenguaje || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Cantidad de páginas
                    </p>
                    <input
                      type="number"
                      name="paginas"
                      onChange={handleInputChange}
                      value={libro.paginas || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Detalles
                    </p>
                    <input
                      type="text"
                      name="detalles"
                      onChange={handleInputChange}
                      value={libro.detalles || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Fecha de publicación
                    </p>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      name="fechaPublicacion"
                      value={libro.fechaPublicacion ?? ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Portada
                      </p>
                      <input
                        name="image"
                        type="file"
                        onChange={handleInputChange}
                        accept=".jpg, .jpeg, .png"
                        required={false}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Precio
                    </p>
                    <input
                      type="number"
                      name="precio"
                      onChange={handleInputChange}
                      value={libro.precio || ''}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Stock
                    </p>
                    <input
                      type="number"
                      name="stock"
                      onChange={handleInputChange}
                      value={libro.stock || ''}
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
                            key={crypto.randomUUID()}
                            className="flex items-center space-x-2 text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded"
                          >
                            <input
                              id={categoria.id}
                              type="checkbox"
                              name={categoria.nombre}
                              className="cursor-pointer"
                              onChange={handleCategorias}
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
                          <div
                            key={crypto.randomUUID()}
                            className="flex items-center space-x-2 text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded"
                          >
                            <input
                              type="checkbox"
                              name={tag.nombre}
                              id={tag.id}
                              className="cursor-pointer"
                              onChange={handleTags}
                              defaultChecked={tagsSeleccionados.includes(
                                tag.id
                              )}
                            />
                            <label htmlFor={tag.nombre}>{tag.nombre}</label>
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
                    onChange={handleInputChange}
                    name="resumen"
                    className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                    placeholder="Resumen del libro.."
                    value={libro.resumen}
                  />
                </div>
                <div className="flex justify-center space-x-10 items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      name="isAvail"
                      type="checkbox"
                      className="w-full border border-gray-300 rounded outline-none focus:bg-gray-50"
                      defaultChecked={false}
                      onChange={handleInputChange}
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
