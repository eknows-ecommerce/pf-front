import { useSelector } from 'react-redux'

import FilaLibro from './FilaLibro'

export default function Productos() {
  const { libros } = useSelector(({ adminStore }) => adminStore)

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="sticky left-0 p-4 text-left bg-white"></th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">
                  Titulo
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
                  Autor
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
                <div className="flex items-center">Precio</div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">Stock</div>
              </th>
              <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div className="flex items-center">ID</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {libros?.map((libro) => (
              <FilaLibro
                key={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                estado={libro.isAvail}
                precio={libro.precio}
                stock={libro.stock}
                id={libro.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
