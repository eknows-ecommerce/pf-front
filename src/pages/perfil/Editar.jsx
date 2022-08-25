import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePerfil } from '../../features/actions/usuarios'
import useUploadImage from 'hooks/useUploadImage'

export default function Editar({ setShowModal }) {
  const [imageInput, setImageInput] = useState(null)
  const [formulario, setFormulario] = useState({})

  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { handleImage } = useUploadImage()

  const dispatch = useDispatch()

  useEffect(() => {
    setFormulario(usuario)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updatePerfil({ id: usuario.id, datos: formulario }))
    setFormulario(false)
    setShowModal(false)
  }

  const handleChange = (e) => {
    const { value, type, name } = e.target
    setFormulario({ ...formulario, [name]: value })
  }

  const handleImagechange = (e) => {
    const { files } = e.target
    handleImage(e)
    setImageInput(files[0])
  }

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onClick={() => setShowModal(false)}
          className="w-full h-full bg-black opacity-50 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-[#6960d5] rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base  font-semibold">Editar Perfil</p>
              </div>
              <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                {/*  */}
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex flex-col">
                    <label className="font-bold">Nombre</label>
                    <input
                      placeholder="Nombre"
                      name="name"
                      type="text"
                      defaultValue={formulario.name}
                      onChange={handleChange}
                      className="w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label name="voz" className="font-bold">
                      Teléfono
                    </label>
                    <input
                      placeholder="Teléfono"
                      name="telefono"
                      defaultValue={formulario.telefono}
                      type="number"
                      onChange={handleChange}
                      className="w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label name="voz" className="font-bold">
                      Pais
                    </label>
                    <input
                      placeholder="Pais"
                      name="pais"
                      type="text"
                      defaultValue={formulario.pais}
                      onChange={handleChange}
                      className="w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label name="voz" className="font-bold">
                      Ciudad
                    </label>
                    <input
                      placeholder="Ciudad"
                      name="ciudad"
                      type="text"
                      defaultValue={formulario.ciudad}
                      onChange={handleChange}
                      className="w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      required
                    />
                  </div>
                  {/* <div className="flex flex-col">
                    <label className="font-bold">Imagen</label>
                    <input
                      name="image"
                      type="file"
                      onChange={handleImagechange}
                      accept=".jpg, .jpeg, .png"
                      required={false}
                      className="w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                  </div> */}
                  <div className="col-span-2 flex items-center justify-center space-x-5 mt-9">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
