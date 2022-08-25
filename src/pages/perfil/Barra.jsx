import Button from 'components/templates/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import imagen from '../../assets/img/logo.png'
export default function Barra() {
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={usuario.picture ? usuario.picture : imagen}
        alt="Couple on a bed with a dog"
      />
      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />
      <div className=" relative px-4 py-2   lg:flex">
        <Link to="/home">
          <Button>Volver</Button>
        </Link>
      </div>
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bienvenidx {usuario.name}
          </h1>
          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            En esta seccion encontrarás toda la informacion sobre tí
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Link
              to="editar"
              className="block w-full px-6 py-3 text-sm font-medium bg-rose-200 rounded shadow text-black sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
            >
              Edita tu perfil
            </Link>
            <Link
              to="pedidos"
              className="block w-full px-6 py-3 text-sm font-medium bg-rose-200  rounded shadow text-black sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
            >
              Revisa tus pedidos
            </Link>

            <Link
              to="favoritos"
              className="block w-full px-6 py-3 text-sm font-medium bg-rose-200 rounded shadow text-black sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
              href="/about"
            >
              Tus Favoritos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
