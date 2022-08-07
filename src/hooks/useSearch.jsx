import { useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return {
    search,
    handleSearch,
  }
}

export default useSearch
