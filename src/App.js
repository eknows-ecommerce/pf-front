import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
/*import Home from './pages/Home';
import Profile from './pages/Profile';
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
/*
          <Route path="/books" element={<Home />} />
          <Route path="/books/:id" element={<Details />} />
          <Route path="/user" element={<Profile />} />
*/
export default App
