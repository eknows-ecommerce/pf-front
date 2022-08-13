import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Home from '../pages/home/Home'
import NotFound from '../pages/notfound/NotFound'
import Navbar from '../components/navbar/Navbar'
import Detalle from '../pages/detalle/Detalle'
import Pedidos from '../pages/perfil/Pedidos'
import Menu from '../pages/perfil/Menu'
import Editar from '../pages/perfil/Editar'
import Admin from 'pages/admin/Admin'
import Datos from 'pages/admin/Datos'
import Cuentas from 'pages/admin/Cuentas'
import Ventas from 'pages/admin/Ventas'
import Productos from 'pages/admin/Productos'
import { ProtectedRoute } from './ProtectedRoute'
// import Login from '../components/sesion/Login'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      <Route path="admin" element={<ProtectedRoute component={Admin} />}>
        <Route path="datos" element={<Datos />} />
        <Route path="cuentas" element={<Cuentas />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="productos" element={<Productos />} />
      </Route>
      <Route path="menu" element={<Menu />}>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="editar" element={<Editar />} />
      </Route>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="detalle/:id" element={<Detalle />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
