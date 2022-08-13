import { useSelector } from 'react-redux'

import FilaCategorias from './FilaCategorias'

export default function Cuentas() {
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  

  return (
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
                <div className="flex items-center">ID</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categorias?.map((cat) => (
              <FilaCategorias
                key={cat.id}
                nombre={cat.nombre}
                id={cat.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
