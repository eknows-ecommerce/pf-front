import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Navbar from '../components/navBar/Navbar'
import Detalle from '../pages/detalle/Detalle'
import Pedidos from '../pages/perfil/Pedidos'
import Menu from '../pages/perfil/Menu'
import Editar from '../pages/perfil/Editar'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      <Route path="menu" element={<Menu />}>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="editar" element={<Editar />} />
      </Route>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="detalle/:id" element={<Detalle />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
