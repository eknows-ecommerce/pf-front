import { useState } from 'react'
import Categorias from 'components/filtros/FiltroCategorias/Categorias'
import Tags from 'components/filtros/filtrosTags/Tags'
import RangoPrecios from 'components/filtros/RangoPrecios'

function Filtros() {
  const [reset, setReset] = useState()

  return (
    <div className="sticky top-0 z-50 shadow-xl bg-slate-100 w-full">
      <details open className="overflow-hidden rounded">
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 cursor-pointer">
          <span className="text-sm font-medium">Filtros</span>
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
          <details close="true" className="overflow-hidden">
            <summary className="px-5 py-3 text-xs font-medium bg-gray-50">
              Categorias
            </summary>
            <Categorias reset={reset} setReset={setReset} />
          </details>
          <details close="true" className="overflow-hidden">
            <summary className="px-5 py-3 text-xs font-medium bg-gray-50">
              Tags
            </summary>
            <Tags reset={reset} setReset={setReset} />
          </details>
          <details close="true" className="overflow-hidden">
            <summary className="px-5 py-3 text-xs font-medium bg-gray-50">
              Precios
            </summary>
            <RangoPrecios reset={reset} setReset={setReset} />
          </details>

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
