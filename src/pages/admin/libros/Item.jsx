import { Link } from 'react-router-dom'
import image from './libro.png'

export default function Item(props) {
  const handleEditar = () => {
    props.setLibro(props)
    props.setFormulario('editar')
  }

  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td className="text-center">
        <p className="font-medium">EB-{props.id}</p>
      </td>
      <td className="pl-4 cursor-pointer">
        <Link to={`editar/${props.id}`}>
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
        </Link>
      </td>
      <td className="p-4 pl-12 text-gray-700 whitespace-nowrap cursor-pointer">
        {props.isAvail ? (
          <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
            Disponible
          </strong>
        ) : (
          <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
            No disponible
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
        <button
          onClick={() => {
            props.setDeshabilitarItemModal(true)
            props.setLibro(props)
          }}
        >
          {props.isAvail ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 hover:text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 hover:text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </td>
    </tr>
  )
}
