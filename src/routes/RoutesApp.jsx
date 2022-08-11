import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Navbar from '../components/NavBar/Navbar'
import Detalle from '../components/Detalle/Detalle'
import Perfil from '../pages/perfil/Perfil'
import Pedidos from '../pages/perfil/Pedidos'
import MenuPerfil from '../pages/perfil/Menu'
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
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp
