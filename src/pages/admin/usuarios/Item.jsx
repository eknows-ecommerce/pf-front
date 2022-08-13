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
  let plataforma
  if (platform) {
    const refactor = platform?.split('')
    const a = refactor?.findIndex((i) => i === '-')
    if (a === -1) plataforma = refactor
    else plataforma = refactor.slice(0, a).join('')
  }

  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 cursor-pointer">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={image} alt="book" />
          </div>
          <div className="pl-4">
            <p className="font-medium">{nickname}</p>
            <p className="text-xs leading-3 text-gray-600 pt-2">{name}</p>
          </div>
        </div>
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
        <p className="font-medium">{plataforma || ''}</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">Registro</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">{id}</p>
      </td>
    </tr>
  )
}
