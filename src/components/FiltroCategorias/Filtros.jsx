import { useState } from 'react'
import Categorias from 'components/filtroCategorias/Categorias'
import Tags from 'components/filtrosTags/Tags'

function Filtros() {
  const [reset, setReset] = useState()
  return (
    <div className="sticky top-0 z-20 shadow-xl cursor-pointer">
      <details open className="overflow-hidden rounded">
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 ">
          <span className="text-sm font-medium">Toggle Filters</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <form action="" className="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Categorias
            </legend>
            <Categorias reset={reset} setReset={setReset} />
          </fieldset>
          <div>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Tags
              </legend>
              <Tags reset={reset} setReset={setReset} />
            </fieldset>
          </div>
          <div className="flex justify-center px-5 py-3 border-t border-gray-200">
            <button
              name="reset"
              type="button"
              className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
              onClick={() => {
                setReset(true)
              }}
            >
              Reset All
            </button>
          </div>
        </form>
      </details>
    </div>
  )
}

export default Filtros
