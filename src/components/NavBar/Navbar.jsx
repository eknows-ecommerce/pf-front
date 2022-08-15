/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import images from '../../assets/img/logo.png'
import Search from '../search/Search'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

import { useRef } from 'react'
import useSearch from '../../hooks/useSearch'
// import Footer from '../footer/Footer'

export default function Navbar() {
  const { isAuthenticated, isLoading } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const show = useRef(null)
  const { search, handleSearch } = useSearch()

  const handleClick = () => {
    show.current.classList.toggle('hidden')
  }

  return (
    <>
      <header className="shadow-sm ">
        <div className="flex items-center justify-between h-16  px-4 mx-auto">
          <div className="">
            {isAuthenticated ? (
              <Link to="menu">
                <button
                  className="mx-5 text-rosadito-600 bg-gray-100 rounded-full"
                  type="button"
                >
                  <img
                    className="flex rounded-full object-left w-10 h-10"
                    src={usuario?.picture}
                    alt={usuario?.nickname}
                  />
                </button>
              </Link>
            ) : (
              isLoading
            )}
          </div>
          <div className="flex items-center space-x-4 ">
            <Link to="/" className="w-16 h-14 bg-transparent">
              <img
                src={images}
                alt="logo"
                className="w-16 h-14 bg-transparent object-cover rounded-full hover:scale-110 transition duration-700 ease-in-out"
              />
            </Link>
            <form className="hidden mb-0 lg:flex w-96">
              <Search search={search} handleSearch={handleSearch} />
            </form>
          </div>
          <div className="flex justify-end flex-1 w-0 lg:hidden">
            <div ref={show} className="hidden">
              <Search search={search} handleSearch={handleSearch} />
            </div>
            <button
              className="p-2 text-gray-500 bg-gray-100 rounded-full"
              type="button"
            >
              <svg
                onClick={handleClick}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <nav className="items-center justify-center hidden space-x-8 font-extrabold  font-poiret-one text-black lg:flex lg:flex-1 lg:w-0">
            <Link className="text-gray-900" to="home">
              Tienda
            </Link>
            <Link to="masvendidos" className="text-gray-900">
              Mas Vendidos
            </Link>
            <Link to="Ofertas" className="text-gray-900">
              Ofertas
            </Link>
            <Link to="contactanos" className="text-gray-900">
              Contactanos
            </Link>
            {usuario.rol === 'admin' && (
              <Link to="admin/dashboard" className="text-gray-900">
                Admin
              </Link>
            )}
          </nav>
          <div className="items-center space-x-4 lg:flex">
            <Link
              to="/home/carrito"
              className="flex items-center content-center justify-center w-10 h-10 border border-gray-700 rounded-full"
            >
              <FaShoppingCart />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
            <Link className="flex-shrink-0 pl-6 text-gray-900" to="home">
              Tienda
            </Link>
            <Link to="masVendidos" className="flex-shrink-0 pl-4 text-gray-900">
              Mas Vendidos
            </Link>
            <Link to="ofertas" className="flex-shrink-0 pl-4 text-gray-900">
              Ofertas
            </Link>
            <Link to="contactanos" className="flex-shrink-0 pl-4 text-gray-900">
              Contactanos
            </Link>
            {usuario.rol === 'admin' && (
              <Link
                to="admin/dashboard"
                className="flex-shrink-0 pl-4 text-gray-900"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      </header>

      <Outlet />
      {/* <Footer /> */}
    </>
  )
}
