import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllPredictivo } from 'features/actions/libros'
import { setSearch } from 'features/reducers/librosSlice'

function Search() {
  const { totalLibros, search, formatos } = useSelector(
    ({ librosStore }) => librosStore
  )
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    dispatch(setSearch(`${e.target.value}`))
  }

  useEffect(() => {
    dispatch(getAllPredictivo(`${formatos}&${search}`))
  }, [dispatch, formatos, search])

  return (
    <div className="relative">
      <>
        <input
          className="h-10 w-full pl-2 text-sm placeholder-gray-300 border border-gray-200 rounded-lg focus:z-10"
          type="search"
          onChange={handleSearch}
          list="my-list-libros"
          id="ice-cream-choice"
          name="ice-cream-choice"
          placeholder="Busqueda..."
        />
        <datalist id="my-list-libros">
          {totalLibros &&
            totalLibros.map((libro) => (
              <option key={libro.id} value={libro.titulo} />
            ))}
        </datalist>
        {!search && (
          <button
            className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
            type="button"
            // onClick={handleClick}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
      </>
    </div>
  )
}

export default Search
