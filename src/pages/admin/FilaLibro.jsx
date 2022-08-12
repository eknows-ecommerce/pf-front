export default function FilaLibro({
  titulo,
  autor,
  stock,
  precio,
  estado,
  id,
}) {
  return (
    <>
      <tr>
        <td className="sticky left-0 p-4 bg-white">
          <label className="sr-only" htmlFor="row_1">
            Row 1
          </label>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-all">
            Editar
          </button>
        </td>
        <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
          {titulo}
        </td>
        <td className="p-4 text-gray-700 whitespace-nowrap">{autor}</td>
        <td className="p-4 text-gray-700 whitespace-nowrap">
          <strong
            className={`${
              estado === true
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }  px-3 py-1.5 rounded text-xs font-medium`}
          >
            {estado === true ? 'Disponible' : 'No disponible'}
          </strong>
        </td>
        <td className="p-4 text-gray-700 whitespace-nowrap">${precio}</td>
        <td className="p-4 text-gray-700 whitespace-nowrap">{stock}</td>
        <td className="p-4 text-gray-700 whitespace-nowrap">{id}</td>
      </tr>
    </>
  )
}
