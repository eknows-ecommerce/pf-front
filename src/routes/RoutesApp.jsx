import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../components/sesion/Login'
import Register from '../components/sesion/Register'
import Navbar from '../components/NavBar/Navbar'
import Detalle from '../components/Detalle/Detalle'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
