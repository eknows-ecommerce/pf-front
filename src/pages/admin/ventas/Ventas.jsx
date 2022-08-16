import { useSelector } from 'react-redux'

import Item from './Item'
import Estadisticas from '../Estadisticas'

function Ventas() {
  const { libros } = useSelector(({ librosStore }) => librosStore)

  return (
    <div className="overflow-x-auto xl:px-20 py-2">
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg mb-3">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Ventas
            </p>
          </div>
        </div>

        <div className="space-y-2">
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
        </div>

        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto space-y-10">
          <Estadisticas />
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Libro</th>
                <th className="font-normal text-left pl-12">Estado</th>
                <th className="font-normal text-left pl-12">Stock</th>
                <th className="font-normal text-left pl-20">Precio</th>
                <th className="font-normal text-left pl-20">ID</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {libros?.map((libro) => (
                <Item key={libro.id} {...libro} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Ventas
