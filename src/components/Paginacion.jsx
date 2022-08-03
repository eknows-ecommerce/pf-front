import { useState } from 'react'

const Paginacion = ({ length }) => {
  length = Math.ceil(length / 6)
  const [state, setState] = useState({
    currentPage: 1,
    totalPages: new Array(length).fill(0),
  })
  const paginaAnterior = () => {
    setState({
      ...state,
      currentPage: state.currentPage - 1 < 1 ? length : state.currentPage - 1,
    })
  }
  const paginaSiguiente = () => {
    setState({
      ...state,
      currentPage: state.currentPage + 1 <= length ? state.currentPage + 1 : 1,
    })
  }
  const paginaSeleccionada = (pagina) => {
    setState({
      ...state,
      currentPage: pagina,
    })
  }

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          width: '100vw',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <a href={'#'} onClick={paginaAnterior}>
            Anterior
          </a>
        </li>
        {state.totalPages.map((pagina, index) => {
          return (
            <li key={`Page_${index + 1}`}>
              <a
                href={'#'}
                onClick={() => {
                  paginaSeleccionada(index + 1)
                }}
                style={{
                  fontSize: state.currentPage == index + 1 ? '18px' : '',
                  color: state.currentPage == index + 1 ? 'deeppink' : 'black',
                }}
              >
                {index + 1}
              </a>
            </li>
          )
        })}
        <li>
          <a href={'#'} onClick={paginaSiguiente}>
            Siguiente
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Paginacion
