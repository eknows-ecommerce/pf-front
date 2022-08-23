import { Link } from 'react-router-dom'
import image from './libro.png'

export default function Item(props) {
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
    </tr>
  )
}
