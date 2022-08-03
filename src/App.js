import { getAll } from './features/actions/categorias'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div className="App">
      <h1> inicio</h1>
    </div>
  )
}

export default App
