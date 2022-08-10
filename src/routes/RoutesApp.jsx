import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Navbar from '../components/NavBar/Navbar'
import Detalle from '../components/Detalle/Detalle'
import Perfil from '../pages/perfil/Perfil'
import Pedidos from '../pages/pedidos/Pedidos'
import MenuPerfil from '../pages/perfil/Menu'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />

        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
        <Route path="configuraciones" element={<MenuPerfil />} />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="perfil" element={<Perfil />} />

        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp
