import image from './usuario.png'

export default function Item({
  name,
  platform,
  isBan,
  nickname,
  email,
  id,
  rol,
}) {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 cursor-pointer">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={image} alt="book" />
          </div>
          <div className="pl-4">
            <p className="font-medium">{name}</p>
            <p className="text-xs leading-3 text-gray-600 pt-2">{nickname}</p>
          </div>
        </div>
      </td>
      <td className="pl-20">
        <p className="font-medium">{email}</p>
      </td>
      <td className="p-4 pl-12 text-gray-700 whitespace-nowrap cursor-pointer">
        {!isBan ? (
          <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
            Activo
          </strong>
        ) : (
          <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
            Desactivado
          </strong>
        )}
      </td>
      <td className="pl-12">
        <p className="font-medium">{rol}</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">Tipo de cuenta</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">{id}</p>
      </td>
      <td className="pl-20">
        <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">
          Ver más
        </button>
      </td>
    </tr>
  )
}
