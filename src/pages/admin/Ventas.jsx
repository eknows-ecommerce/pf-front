export default function Ventas() {
  return (
    <div>
      <article className="flex flex-col gap-4 p-6 bg-violetapaleta-50 border border-gray-100 rounded-lg">
        <div className="inline-flex self-end gap-2 p-1 text-red-600 bg-red-100 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
          <span className="text-xs font-medium"> 67.81% Menos Popular</span>
        </div>
        <div>
          <strong className="block text-sm font-medium text-black">
            {' '}
            Pery Jackson y el Ladron del Rayo{' '}
          </strong>
          <p>
            <span className="text-2xl font-medium text-black"> 12 </span>
            <span className="text-xs text-black"> visitas</span>
          </p>
        </div>
      </article>
      <article className="flex flex-col gap-4 p-6 bg-rosadito-50 border border-gray-100 rounded-lg">
        <div className="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="text-xs font-medium"> 67.81% Mas vendido </span>
        </div>
        <div>
          <strong className="block text-sm font-medium text-black">
            {' '}
            Harry Potter y la Piedra Filosofal{' '}
          </strong>
          <p>
            <span className="text-2xl font-medium text-black"> +45 </span>
            <span className="text-xs text-black"> libros</span>
          </p>
        </div>
      </article>

      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="sticky left-0 p-4 text-left bg-white"></th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Nombre
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    ></svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Email
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    ></svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Estado
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    ></svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Numero de Telefono
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Order de Compra
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    Pedido
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="sticky left-0 p-4 bg-white">
                  <label className="sr-only" htmlFor="row_1">
                    Row 1
                  </label>
                  <input
                    className="w-5 h-5 border-gray-200 rounded"
                    type="checkbox"
                    id="row_1"
                  />
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  John Doe
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  john.doe@email.com
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                    Cancelado
                  </strong>
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  (+44) 2198 450650
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  SHOP-1268-8910
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  Ver pedido
                </td>
              </tr>
              <tr>
                <td className="sticky left-0 p-4 bg-white">
                  <label className="sr-only" htmlFor="row_2">
                    Row 2
                  </label>
                  <input
                    className="w-5 h-5 border-gray-200 rounded"
                    type="checkbox"
                    id="row_2"
                  />
                </td>
                <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  jane.doe@email.com
                </td>
                <td className="p-4 whitespace-nowrap">
                  <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                    Pagado
                  </strong>
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  (+44) 1928 450650
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  SHOP-4235-1526
                </td>
                <td className="p-4 text-gray-700 whitespace-nowrap">
                  Ver pedido
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
