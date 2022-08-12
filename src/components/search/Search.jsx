import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBusqueda } from '../../features/reducers/librosSlice'
import { useEffect } from 'react'

function Search({ search, handleSearch }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/home?title=' + search)
    dispatch(setBusqueda(search))
  }

  useEffect(() => {
    dispatch(setBusqueda(search))
  }, [search, dispatch])

  return (
    <div className="relative">
      <input
        className="h-10 pr-10 pl-2 text-sm placeholder-gray-300 border border-gray-200 rounded-lg focus:z-10"
        placeholder="Busqueda..."
        type="search"
        onChange={handleSearch}
      />
      <button
        className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
        type="button"
        onClick={handleClick}
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
    </div>
  )
}

export default Search
