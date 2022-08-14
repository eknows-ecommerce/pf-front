import image from './categoria.png'

export default function Item({ nombre, id }) {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 cursor-pointer">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={image} alt="book" />
          </div>
          <div className="pl-4">
            <p className="font-medium">{nombre}</p>
          </div>
        </div>
      </td>
      <td className="pl-20">
        <p className="font-medium">{id}</p>
      </td>
    </tr>
  )
}
