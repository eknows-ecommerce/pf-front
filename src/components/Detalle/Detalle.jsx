import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../features/actions/libros'

function Detalle() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { libro } = useSelector(({ librosStore }) => librosStore)

  useEffect(() => {
    dispatch(getById(id))
  }, [id, dispatch])

  function handleBuy(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAdd(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAddRv(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div>
      <button onClick={() => history(-1)}>Volver</button>
      <>
        <img src={libro.portada} alt={libro.titulo} />
        <h2>{libro.titulo && libro.titulo}</h2>
        <h3>{libro.autor && libro.autor}</h3>
        <p>${libro.precio && libro.precio}</p>
        <button onClick={(e) => handleBuy(e)}>Comprar</button>{' '}
        <button onClick={(e) => handleAdd(e)}>Agregar a favoritos</button>
        <h2>Resumen: </h2>
        <p>{libro.resumen}</p>
        <h2>Reseñas: </h2>
        <p>Reseña uno</p>
        <p>Reseña dos</p>
        <p>Reseña tres</p>
        <button onClick={(e) => handleAddRv(e)}>Agregar Reseña...</button>
      </>
    </div>
  )
}
export default Detalle
