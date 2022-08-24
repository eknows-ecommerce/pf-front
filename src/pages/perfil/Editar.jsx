import useUploadImage from 'hooks/useUploadImage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { update } from '../../features/actions/usuarios'
export default function Editar() {
  const { handleImage } = useUploadImage()
  const [imageInput, setImageInput] = useState(null)

  const navigate = useNavigate()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const [on, setOn] = useState(false)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    pais: '',
    ciudad: '',
    telefono: '',
    email: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(update({ id: usuario.id, datos: input }))
    alert('Cambios guardados con éxito!')
    setInput({})
    setInput({
      name: '',
      pais: '',
      ciudad: '',
      telefono: '',
      email: '',
    })
    navigate('/menu')
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const handleImagechange=(e)=>{
    const {files}=e.target
    handleImage(e)
        setImageInput(files[0])
  }
  const handleExit = (e) => {
    setOn(!on)
  }
  useEffect(() => {
    if (on) {
      navigate('/menu')
    }
  }, [on])

  

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-green-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center  justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-red-50 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base  font-semibold">Editar Perfil</p>
                <button onClick={handleExit} className="focus:outline-none">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L7 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7L21 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                <div className="flex items-center justify-center">
                <input
                        name="image"
                        type="file"
                        onChange={handleImagechange}
                        accept=".jpg, .jpeg, .png"
                        required={false}
                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                      />
                </div>
                <form onSubmit={handleSubmit} className="mt-11">
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="Nombre"
                      name="name"
                      value={input.name}
                      onChange={(e) => handleChange(e)}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      type="text"
                    />
                    <input
                      placeholder="Telefono"
                      name="telefono"
                      value={input.telefono}
                      type="number"
                      onChange={(e) => handleChange(e)}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="Pais"
                      name="pais"
                      type="text"
                      onChange={handleChange}
                      value={input.pais}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                    <input
                      placeholder="Ciudad"
                      name="ciudad"
                      type="text"
                      onChange={handleChange}
                      value={input.ciudad}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                    <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3"></div>
                  </div>
                  <div className="mt-8">
                    <textarea
                      placeholder="Resumen"
                      className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                      defaultValue={''}
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={handleExit}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
