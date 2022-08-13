export default function FilaTags({
    nombre,
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
            {nombre}
          </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">{id}</td>
        </tr>
      </>
    )
  }
  