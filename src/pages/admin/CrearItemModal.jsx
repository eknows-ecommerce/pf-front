import useUploadImage from 'hooks/useUploadImage'
import axios from 'axios'
import { useState } from 'react'
const URL_API = process.env.REACT_APP_URL_API_CLOUDINARY

function CrearItemModal({
  setCrearItemModal,
  valorNuevoItem,
  setValorNuevoItem,
  crearItem,
  tipo,
}) {
  const { preview, handleImage } = useUploadImage()
  const [image, setImage] = useState('')
  const handleSubmit = async (e) => {
    const file = image
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'Images')
    const res = await axios.post(URL_API, formData)
    if (res.statusText === 'OK') {
      //modificar alertas mas piolas
      alert('Su imagen se subio correctamente')
    } else {
      alert('Ocurrio un error al subir la imagen')
    }
    crearItem(res.data.secure_url)
  }

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onClick={() => setCrearItemModal(false)}
          className="w-full h-full bg-black bg-opacity-50 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  {tipo === 'Categoria' && 'Nueva Categoria'}
                  {tipo === 'Tag' && 'Nuevo Tag'}
                </p>
              </div>
              <div
                className={
                  tipo === 'Categoria'
                    ? 'px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7'
                    : 'px-4 md:px-10 md:pb-4 pb-7'
                }
              >
                {tipo === 'Categoria' && (
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
                      {preview ? (
                        <figure className=" flex flex-col justify-center items-center h-full w-full">
                          <img
                            src={preview}
                            alt="Categoria nueva"
                            className="w-full object-cover shadow-xl shadow-gray-800 rounded-xl"
                            loading="lazy"
                          />
                          <figcaption className="text-base font-medium text-black">
                            {valorNuevoItem}
                          </figcaption>
                        </figure>
                      ) : (
                        <svg
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5 12H22.515"
                            stroke="#94A3B8"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z"
                            stroke="#94A3B8"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999"
                            stroke="#94A3B8"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999"
                            stroke="#94A3B8"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                )}
                <form className="mt-11">
                  <div className="flex flex-wrap space-y-2">
                    <label className="text-sm mx-2 font-bold">Nombre</label>
                    <input
                      placeholder="Acción"
                      defaultValue={valorNuevoItem}
                      onChange={(e) => setValorNuevoItem(e.target.value)}
                      className="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      required
                    />
                    {tipo === 'Categoria' && (
                      <>
                        <label className="text-sm mx-2 font-bold">
                          Miniatura
                        </label>
                        <input
                          placeholder="Miniatura"
                          id="image"
                          type="file"
                          className="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                          onChange={(e) => {
                            handleImage(e)
                            setImage(e.target.files[0])
                          }}
                          accept=".jpg, .jpeg, .png"
                        />
                      </>
                    )}
                  </div>
                </form>
                <div className="flex items-center justify-around mt-9">
                  <button
                    onClick={() => setCrearItemModal(false)}
                    className="px-6 py-3 bg-gray-400 hover:bg-red-700 shadow rounded text-sm text-white transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={(e) => {
                      handleSubmit(e)
                    }}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 shadow rounded text-sm text-white transition-all"
                  >
                    Confirmar
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

export default CrearItemModal
