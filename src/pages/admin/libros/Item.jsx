import image from './libro.png'

export default function Item(props) {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td
        className="pl-4 cursor-pointer"
        onClick={() => props.setEditarLibroFormulario(true)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={image} alt="book" />
          </div>
          <div className="pl-4">
            <p className="font-medium">{props.titulo}</p>
            <p className="text-xs leading-3 text-gray-600 pt-2">
              {props.autor}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 pl-12 text-gray-700 whitespace-nowrap cursor-pointer">
        {props.isAvail ? (
          <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
            Disponible
          </strong>
        ) : (
          <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
            Agotado
          </strong>
        )}
      </td>
      <td className="pl-12">
        <p className="font-medium">{props.stock}</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">Unidades</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">${props.precio}</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">Sin Descuento</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">{props.id}</p>
      </td>
      <td className="pl-20">
        <button onClick={() => props.deshabilitarLibro(props)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 hover:text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
      </td>
    </tr>
  )
}
