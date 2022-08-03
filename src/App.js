import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
/*import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error'
import Details from './pages/Details';*/
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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
/*
          <Route path="/books" element={<Home />} />
          <Route path="/books/:id" element={<Details />} />
          <Route path="/user" element={<Profile />} />
          <Route path="*" element={<Error />} />

*/
export default App
