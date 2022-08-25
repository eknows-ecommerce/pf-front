import { useSelector, useDispatch } from 'react-redux'
import { getAll as getAllUsuarios } from 'features/actions/usuarios'
import { getAll as getAllLibros } from 'features/actions/libros'
import { getAll as getAllPedidos } from 'features/actions/pedidos'
import { useEffect, useState } from 'react'

function Estadisticas() {
  const [ganancias, setGanancias] = useState(0)
  const { usuarios } = useSelector(({ usuariosStore }) => usuariosStore)
  const { libros } = useSelector(({ librosStore }) => librosStore)
  const { pedidos } = useSelector(({ pedidosStore }) => pedidosStore)

  const dispatch = useDispatch()

  useEffect(() => {
    let cuenta = 0
    pedidos.forEach((pedido) => {
      pedido.DetalleLibro.forEach((libro) => {
        cuenta += libro.precio * libro.Detalle.cantidad
      })
    })
    setGanancias(cuenta)
  }, [pedidos])

  useEffect(() => {
    dispatch(getAllUsuarios())
    dispatch(getAllLibros())
    dispatch(getAllPedidos())
  }, [])

  return (
    <div className="w-full flex items-center justify-center my-5">
      <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 px-12 gap-x-12 2xl:gap-x-28 w-full">
          <div className="w-full">
            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">
              Libros
            </p>
            <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-3 text-[#3b82f6] mt-3 md:mt-5">
              {libros.length}
            </p>
            <p className="mt-1.5 text-xs leading-3 text-gray-400">Totales</p>
          </div>

          <div className="w-full">
            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">
              Pedidos
            </p>
            <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-3 text-[#d2439c] mt-3 md:mt-5">
              {pedidos.length}
            </p>
            <p className="mt-1.5 text-xs leading-3 text-gray-400">Totales</p>
          </div>

          <div className="w-full">
            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">
              Ganancias
            </p>
            <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-3 text-[#84cc16] mt-3 md:mt-5">
              ${ganancias.toFixed(2)}
            </p>
            <p className="mt-1.5 text-xs leading-3 text-gray-400">Meta Anual</p>
          </div>

          <div className="w-full">
            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">
              Usuarios
            </p>
            <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-3 text-[#eab308] mt-3 md:mt-5">
              {usuarios.length}
            </p>
            <p className="mt-1.5 text-xs leading-3 text-gray-400">
              Registrados
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estadisticas
