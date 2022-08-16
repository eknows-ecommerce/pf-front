import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useModal from 'hooks/useModal'
import useSearch from 'hooks/useSearch'
import usePaginacion from 'hooks/usePaginacion'
import SearchPanelAdmin from '../SearchPanelAdmin'

import { getAll, update } from 'features/actions/pedidos'
import ModalComponent from 'components/modals/Modalcomponent'
import Item from './Item'

export default function PedidosAdmin() {
  const { modals, openClose } = useModal()
  const { search, handleSearch } = useSearch()
  const estado = useSearch()
  const [pedido, setPedido] = useState({})
  const { pedidos } = useSelector(({ pedidosStore }) => pedidosStore)
  // const { paginas, paginaAnterior, paginaSiguiente, handleTotal } =
  usePaginacion()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(`titulo=${search}`))
  }, [search])

  useEffect(() => {
    dispatch(getAll())
  }, [pedidos.count, pedido.state])

  const handlePedido = (e) => {
    setPedido({
      ...pedido,
      estado: e.target.value,
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(update({ ...pedido, estado: pedido.estado }))
    openClose('pedido')
  }
  return (
    <>
      <ModalComponent
        modal={modals['pedido']}
        closeModal={() => openClose('pedido')}
        titulo={'Cambiar estado del pedido'}
        ancho="450px"
        padding="40px"
      >
        <label className="text-sm mx-2 font-bold">Estado</label>
        <input
          placeholder="Pendiente - Enviado - Entregado"
          onChange={handlePedido}
          className="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
          required
        />
        <div className="flex items-center justify-around mt-9">
          <button
            onClick={handleUpdate}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 shadow rounded text-sm text-white transition-all"
          >
            Confirmar
          </button>
        </div>
      </ModalComponent>
      <div className="overflow-x-auto xl:px-0 py-2">
        <div className="w-full sm:px-2">
          <div className="px-2 md:px-10 py-2 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Pedidos
              </p>
            </div>
          </div>
          <div className="bg-white shadow px-2 md:px-10 pt-2 md:pt-2 pb-2 overflow-y-auto">
            <SearchPanelAdmin
              search={search}
              handleSearch={handleSearch}
              placeholder="Buscar por titulo"
            />
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="h-16 w-full text-xl leading-none text-white bg-black">
                  <th className="font-normal text-left pl-10">Id</th>
                  <th className="font-normal text-left pl-20">Titulo</th>
                  <th className="font-normal text-left pl-10">Estado</th>
                  <th className="font-normal text-left pl-10">
                    Dirección Envio
                  </th>
                  <th className="font-normal text-left pl-20">Cantidad</th>
                  <th className="font-normal text-left pl-10">Precio</th>
                  <th className="font-normal text-left pl-10">Total</th>
                  <th className="font-normal text-left pl-10"></th>
                </tr>
              </thead>
              <tbody className="w-full">
                {pedidos.length > 0 &&
                  pedidos?.map((p) =>
                    p?.DetalleLibro?.map((d) => (
                      <Item
                        key={crypto.randomUUID()}
                        idPedido={p.id}
                        titulo={d.titulo}
                        estado={p.estado}
                        direccionEnvio={p.direccionEnvio}
                        precio={d.precio}
                        cantidad={d.Detalle.cantidad}
                        modals={modals}
                        openClose={openClose}
                        pedido={p}
                        setPedido={setPedido}
                      />
                    ))
                  )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="my-5">
      {paginas.totalPages && (
        <Paginacion
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          paginas={paginas}
        />
      )}
    </div> */}
      </div>
    </>
  )
}
