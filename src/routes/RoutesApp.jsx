import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Navbar from '../components/NavBar/Navbar'
import Detalle from '../components/Detalle/Detalle'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />

      </Route>
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
