import { useState } from 'react'

const initialState = {
  total: 0,
  currentPage: 1,
  totalPages: 1,
  limit: 6,
}

function usePaginacion(valor = initialState) {
  const [paginado, setPaginado] = useState(valor)

  const handleTotal = (total) => {
    setPaginado({
      ...paginado,
      total,
      totalPages: Math.ceil(total / paginado.limit),
    })
  }

  const handleCurrent = (currentPage) => {
    setPaginado({
      ...paginado,
      currentPage,
    })
  }
  const handleLimit = (limit) => {
    setPaginado({
      ...paginado,
      limit,
    })
  }

  const handlePrevius = () => {
    setPaginado({
      ...paginado,
      currentPage:
        paginado.currentPage - 1 < 1
          ? paginado.totalPages
          : paginado.currentPage - 1,
    })
  }
  const handleNext = () => {
    setPaginado({
      ...paginado,
      currentPage:
        paginado.currentPage + 1 <= paginado.totalPages
          ? paginado.currentPage + 1
          : 1,
    })
  }

  return {
    paginado,
    handlePrevius,
    handleCurrent,
    handleNext,
    handleTotal,
    handleLimit,
  }
}
export default usePaginacion
