export default function Item({
  idPedido,
  titulo,
  estado,
  direccionEnvio,
  precio,
  cantidad,
  openClose,
  pedido,
  setPedido,
}) {
  const handlePedido = (pedido) => {
    setPedido(pedido)
    openClose('pedido')
  }
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 cursor-pointer">
      <td className=" text-right">
        <p className="font-medium">{`PC-${idPedido}`}</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">{titulo}</p>
      </td>

      <td className="p-4 pl-10 text-gray-700 whitespace-nowrap cursor-pointer">
        {estado === 'Enviado' ? (
          <strong className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded text-xs font-medium">
            Enviado
          </strong>
        ) : estado === 'Pendiente' ? (
          <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
            Pendiente
          </strong>
        ) : (
          <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
            Entregado
          </strong>
        )}
      </td>
      <td className="pl-12">
        <p className="font-medium">{direccionEnvio}</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">{cantidad}</p>
      </td>
      <td className="pl-10">
        <p className="font-medium">{precio}</p>
      </td>
      <td className="pl-10">
        <p className="font-medium">{(precio * cantidad).toFixed(2)}</p>
      </td>
      <td className="pl-20">
        <button
          onClick={() => handlePedido(pedido)}
          className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
        >
          Cambiar Estado
        </button>
      </td>
    </tr>
  )
}
