import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAll as getAllCategorias } from 'features/actions/categorias'
import { getAll as getAllTags } from 'features/actions/tags'
import { getAll as getAllFormatos } from 'features/actions/formatos'
import { create, getById, update } from 'features/actions/libros'

import { useNavigate, useParams } from 'react-router-dom'

import { FaLongArrowAltLeft } from 'react-icons/fa'

import axios from 'axios'

import useUploadImage from 'hooks/useUploadImage'
import { validarInputText } from 'assets/validacionesInputs/validaciones'

const URL_API = process.env.REACT_APP_URL_API_CLOUDINARY

const initialState = {
  titulo: '',
  autor: '',
  resumen: '',
  precio: 0,
  isAvail: true,
  stock: 0,
  editorial: '',
  fechaPublicacion: new Date().toISOString().slice(0, 10), // yyyy-MM-ddThh:mm          8/22/2022, 8:48:26 PM
  paginas: 0,
  detalles: '',
  lenguaje: '',
  portada: 'https://i.imgur.com/md6Ac63.jpeg',
  categorias: [],
  tags: [],
  formatos: [],
}

export default function LibroFormulario() {
  const [formulario, setFormulario] = useState(initialState)

  const [imageInput, setImageInput] = useState(null)
  const { handleImage } = useUploadImage()

  const { libro, msg } = useSelector(({ librosStore }) => librosStore)
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  const { tags } = useSelector(({ tagsStore }) => tagsStore)
  const { formatos } = useSelector(({ formatosStore }) => formatosStore)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { libroId } = useParams()

  useEffect(() => {
    if (categorias.length === 0) dispatch(getAllCategorias())
    if (tags.length === 0) dispatch(getAllTags())
    if (formatos.length === 0) dispatch(getAllFormatos())
  }, [categorias, tags, formatos, dispatch])

  useEffect(() => {
    if (libroId !== undefined) dispatch(getById(libroId))
  }, [dispatch, libroId])

  useEffect(() => {
    if (libro) {
      setFormulario({
        titulo: libro.titulo || initialState.titulo,
        autor: libro.autor || initialState.autor,
        resumen: libro.resumen || initialState.resumen,
        precio: libro.precio || initialState.precio,
        isAvail: !libro.isAvail || initialState.isAvail,
        stock: libro.stock || initialState.stock,
        editorial: libro.editorial || initialState.editorial,
        fechaPublicacion:
          libro.fechaPublicacion || initialState.fechaPublicacion,
        paginas: libro.paginas || initialState.paginas,
        detalles: libro.detalles || initialState.detalles,
        lenguaje: libro.lenguaje || initialState.lenguaje,
        portada: libro.portada || initialState.portada,
        categorias: libro.CategoriaLibro?.map((cat) => cat.id) || [],
        tags: libro.TagLibro?.map((tag) => tag.id) || [],
        formatos: libro.FormatoLibro?.map((f) => f.id) || [],
      })
    }
  }, [libro])

  const validaciones = () => {
    if (formulario.categorias.length <= 0) {
      return 'Seleccionar al menos 1 categoria'
    }
    if (formulario.tags.length <= 0) {
      return 'Seleccionar al menos 1 tag'
    }
    if (formulario.formatos.length <= 0) {
      return 'Seleccionar al menos 1 formato'
    }
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let file
    let res
    try {
      if (imageInput) {
        file = imageInput
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'Images')
        res = await axios.post(URL_API, formData)
      }
    } catch (error) {
      alert('Problemas al subir la imagen')
      console.log(error)
    }
    const libroObj = {
      ...formulario,
      portada: res?.data?.secure_url || initialState.portada,
      isAvail: formulario.isAvail,
      id: libroId,
    }

    let mensaje = validaciones()
    if (mensaje) return alert(mensaje)

    if (libroId) {
      dispatch(update(libroObj))
    } else {
      dispatch(create(libroObj))
    }
    navigate('/admin/libros')
  }

  const handleInputChange = (e) => {
    const { type, name, value, files, checked } = e.target
    switch (type) {
      case 'text':
        setFormulario({
          ...formulario,
          [name]: validarInputText(value) ? value : value.slice(0, -1),
        })

        break
      case 'file':
        handleImage(e)
        setImageInput(files[0])
        break
      case 'checkbox':
        setFormulario({ ...formulario, [name]: checked })
        break
      default:
        setFormulario({ ...formulario, [name]: value })
        break
    }
  }

  const handleCheckbox = (e, tipo) => {
    const { name } = e.target
    setFormulario({
      ...formulario,
      [tipo]: formulario[tipo].includes(+name)
        ? formulario[tipo].filter((item) => item !== +name)
        : [...formulario[tipo], +name],
    })
  }

  const handleReset = (e) => {
    e.preventDefault()

    if (libroId) {
      setFormulario({
        titulo: libro.titulo || initialState.titulo,
        autor: libro.autor || initialState.autor,
        resumen: libro.resumen || initialState.resumen,
        precio: libro.precio || initialState.precio,
        isAvail: !libro.isAvail || initialState.isAvail,
        stock: libro.stock || initialState.stock,
        editorial: libro.editorial || initialState.editorial,
        fechaPublicacion:
          libro.fechaPublicacion || initialState.fechaPublicacion,
        paginas: libro.paginas || initialState.paginas,
        detalles: libro.detalles || initialState.detalles,
        lenguaje: libro.lenguaje || initialState.lenguaje,
        portada: libro.portada || initialState.portada,
        categorias: libro.CategoriaLibro?.map((cat) => cat.id) || [],
        tags: libro.TagLibro?.map((tag) => tag.id) || [],
        formatos: libro.FormatoLibro?.map((f) => f.id) || [],
      })
    } else {
      setFormulario(initialState)
    }
  }

  const handleKeyUp = (e) => {
    e.preventDefault()
    validarInputText(e.key)
    console.log(e.key)
  }

  return (
    <>
      <div className="flex justify-end pt-10 px-10">
        <Link to="/admin/libros">
          <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p className="text-sm font-medium leading-none text-white">
              Todos los libros
            </p>
            <FaLongArrowAltLeft className="h-4 w-4 text-white" />
          </button>
        </Link>
      </div>
      <form id="formularioId" onSubmit={handleSubmit} className="px-2 py-5 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full">
            <div className="py-4 px-2">
              <div className="bg-white rounded shadow py-7">
                <div className="hidden lg:block md:hidden"></div>
                <div className="mt-10 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Nuevo libro
                  </p>
                  <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-7 mt-7 ">
                    <div className="w-full">
                      <p className="text-base font-medium leading-none text-gray-800">
                        Título
                      </p>
                      <input
                        type="text"
                        name="titulo"
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                        value={formulario.titulo}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        required
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
                        value={formulario.autor}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        required
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
                        value={formulario.editorial}
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
                        value={formulario.lenguaje}
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
                        value={formulario.paginas}
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
                        value={formulario.detalles}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Fecha de publicación
                      </p>
                      <input
                        disabled
                        type="date"
                        onChange={handleInputChange}
                        name="fechaPublicacion"
                        value={formulario.fechaPublicacion}
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
                        value={formulario.precio}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        required
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
                        value={formulario.stock}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        required
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
                                id={categoria.nombre}
                                type="checkbox"
                                name={categoria.id}
                                className="cursor-pointer"
                                onChange={(e) =>
                                  handleCheckbox(e, 'categorias')
                                }
                                defaultChecked={formulario?.categorias?.some(
                                  (cat) => cat === categoria.id
                                )}
                              />
                              <label
                                className="cursor-pointer"
                                htmlFor={categoria.nombre}
                              >
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
                                name={tag.id}
                                id={tag.nombre}
                                className="cursor-pointer"
                                onChange={(e) => handleCheckbox(e, 'tags')}
                                defaultChecked={formulario?.tags?.some(
                                  (t) => t === tag.id
                                )}
                              />
                              <label htmlFor={tag.nombre}>{tag.nombre}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full w-full">
                      <label className="text-sm text-left font-medium leading-none text-gray-800">
                        Formatos
                      </label>
                      <div className="flex flex-wrap justify-start items-center mt-2">
                        <div className="flex flex-wrap justify-between items-center w-full border rounded border-gray-300 md:px-6 px-3 py-1 lg:gap-x-2 md:gap-x-2 gap-x-1">
                          {formatos?.map((formato) => (
                            <div
                              key={crypto.randomUUID()}
                              className="flex items-center space-x-2 text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded"
                            >
                              <input
                                type="checkbox"
                                name={formato.id}
                                id={formato.nombre}
                                className="cursor-pointer"
                                onChange={(e) => handleCheckbox(e, 'formatos')}
                                defaultChecked={formulario?.formatos?.some(
                                  (f) => f === formato.id
                                )}
                              />
                              <label htmlFor={formato.nombre}>
                                {formato.nombre}
                              </label>
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
                      placeholder="Resumen del formulario.."
                      value={formulario.resumen}
                      required
                    />
                  </div>
                  <div className="flex justify-center space-x-10 items-center">
                    <div className="flex items-center space-x-2">
                      <input
                        name="isAvail"
                        type="checkbox"
                        className="w-full border border-gray-300 rounded outline-none focus:bg-gray-50"
                        defaultChecked={formulario.isAvail}
                        onChange={handleInputChange}
                      />
                      <label>Disponible</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button
                    onClick={handleReset}
                    className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full"
                  >
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
    </>
  )
}
