import { getByUser } from 'features/actions/pedidos'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import images from '../../assets/img/logo.png'
import useModal from 'hooks/useModal'
import ModalComponent from 'components/modals/Modalcomponent'

export default function Pedidos() {
  const { pedidosUsuario } = useSelector(({ pedidosStore }) => pedidosStore)
  const [voucher, setVoucher] = useState([])
  const [totalPrecio, setTotalPrecio] = useState(0)

  const { modals, openClose } = useModal()

  const handleVoucher = (id) => {
    const pedido = pedidosUsuario.find((p) => p.id === id)
    let total = 0

    setVoucher(
      pedido.DetalleLibro.map((i) => (
        <div className="mb-5" key={crypto.randomUUID()}>
          <p className="text-blue-500">
            <span className="text-black">Titulo: </span>
            {i.titulo}
          </p>
          <p className="text-blue-500">
            <span className="text-black">Precio: </span>${i.precio}
          </p>
          <p className="text-blue-500">
            <span className="text-black">Cantidad: </span>
            {i.Detalle.cantidad}
          </p>
          <p className="text-blue-500 font-bold">
            <span className="text-black">Total: </span>$
            {i.precio * i.Detalle.cantidad}
          </p>
          <p className="hidden">{(total += i.precio * i.Detalle.cantidad)}</p>
        </div>
      ))
    )
    setTotalPrecio(total)
  }

  return (
    <>
      <div className=" h-full sm:px-2">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-center">Compra N°</th>
                <th className="font-normal text-center">Direccion</th>
                <th className="font-normal text-center">Estado</th>
                <th className="font-normal text-center">Detalle</th>
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
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{e.estado}</p>
                    </td>
                    <td className="pl-20">
                      <button
                        onClick={() => {
                          handleVoucher(e.id)
                          openClose('detalle')
                        }}
                        className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                      >
                        <p className="text-sm font-medium leading-none text-white">
                          Ver detalles
                        </p>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          <ModalComponent
            modal={modals['detalle']}
            closeModal={() => openClose('detalle')}
            titulo="Voucher"
          >
            <div className="bg-gray-100 p-5 rounded-xl">
              {voucher}

              <h1 className="font-bold text-xl">
                Total: <span>${totalPrecio}</span>
              </h1>
            </div>
          </ModalComponent>
        </div>
      </div>
    </>
  )
}
