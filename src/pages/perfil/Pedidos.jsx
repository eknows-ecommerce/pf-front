import { getByUser } from 'features/actions/pedidos'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import images from '../../assets/img/logo.png'

export default function Pedidos() {
  // const dispatch= useDispatch()
  const { pedidosUsuario } = useSelector(({ pedidosStore }) => pedidosStore)
  //  const {usuario } = useSelector(({ usuariosStore})=> usuariosStore)
  const [show, setShow] = useState(null)
  return (
    <>
      <div className=" h-full sm:px-2">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Compra N°</th>
                <th className="font-normal text-left pl-12">Direccion</th>
                <th className="font-normal text-left pl-12">Estado</th>
                <th className="font-normal text-left pl-20">detalle</th>
              </tr>
            </thead>
            {pedidosUsuario &&
              pedidosUsuario?.map((e) => (
                <tbody key={crypto.randomUUID()} className="w-full">
                  <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img src={images} alt="logo" />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium">{e.id}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {e.createdAt}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {e.direccionEnvio}
                      </p>
                      <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{e.estado}</p>
                    </td>
                    <td className="pl-20">
                      <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">
                          Ver detalles
                        </p>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  )
}
