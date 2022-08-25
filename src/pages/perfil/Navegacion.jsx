import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import images from 'assets/img/logo.png'
import {
  FaBars,
  FaTh,
  FaUserFriends,
  FaLongArrowAltLeft,
  FaTags,
  FaChartBar,
  FaBook,
  FaCalendar,
  FaListUl,
} from 'react-icons/fa'

export default function Navegacion() {
  const [show, setShow] = useState(false)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  return (
    <div className="h-full w-full">
      <div className="bg-neutral-900 xl:hidden flex justify-between w-full px-6 py-4 items-center fixed">
        <div className="flex justify-between items-center space-x-3">
          <Link to="/" className="w-10 h-10 bg-transparent">
            <img
              src={images}
              alt="logo"
              className="w-10 h-10 bg-transparent object-cover rounded-full hover:scale-110 transition duration-700 ease-in-out"
            />
          </Link>
          <p className="text-2xl leading-6 text-white">Eknows</p>
        </div>
        <div aria-label="toggler" className="flex justify-center items-center">
          <button
            aria-label="open"
            id="open"
            onClick={() => setShow(true)}
            className={`${
              show ? 'hidden' : ''
            } focus:outline-none focus:ring-2`}
          >
            <FaBars className="text-white" />
          </button>
          <button
            aria-label="close"
            id="close"
            onClick={() => setShow(false)}
            className={`${
              show ? '' : 'hidden'
            } focus:outline-none focus:ring-2`}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="Main"
        className={`${
          show ? 'translate-x-0' : '-translate-x-full'
        } transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full fixed sm:w-64 bg-neutral-900 flex-col px-1`}
      >
        <div className="hidden xl:flex justify-start p-6 py-4 items-center space-x-3 overflow-y-hidden">
          <Link to="/" className="w-10 h-10 bg-transparent">
            <img
              src={images}
              alt="logo"
              className="w-10 h-10 bg-transparent object-cover rounded-full hover:scale-110 transition duration-700 ease-in-out"
            />
          </Link>
          <p className="text-2xl leading-6 text-white">Eknows</p>
        </div>
        <div className="flex flex-col pb-6 px-6 w-full items-center justify-center overflow-y-hidden">
          <div className=" flex justify-between items-center pt-5 w-full">
            <Link
              to="/menu"
              className="flex justify-center items-center space-x-2 cursor-pointer"
            >
              <div>
                <img
                  className="rounded-full h-8 w-8"
                  src={usuario.picture}
                  alt="avatar"
                />
              </div>
              <div className="flex justify-start flex-col items-start">
                <p className="text-sm leading-5 text-white">{usuario.name}</p>
                <p className="text-xs leading-3 text-gray-300">
                  {usuario.nickname}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full border-neutral-700 border-b space-y-1 pb-5 overflow-y-hidden">
          <Link
            to="dashboard"
            className="flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400  text-neutral-100 rounded hover:bg-neutral-800 px-4 py-3"
          >
            <FaTh className="h-5 w-5" />
            <p className="text-base leading-4 ">Dashboard</p>
          </Link>

          <Link
            to="/home"
            className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-neutral-100 rounded hover:bg-neutral-800 px-4 py-3"
          >
            <FaLongArrowAltLeft className="h-5 w-5" />
            <p className="text-base leading-4 ">Volver</p>
          </Link>
        </div>
        <div id="menu1" className="flex flex-col w-full pt-5 space-y-1">
          <Link
            to="usuarios"
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-neutral-800 focus:text-white hover:bg-neutral-800 text-neutral-400 rounded px-3 py-3 w-full"
          >
            <FaUserFriends className="h-5 w-5" />
            <p className="text-base leading-4">Usuarios</p>
          </Link>
          <Link
            to="pedidos"
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-neutral-800 focus:text-white hover:bg-neutral-800 text-neutral-400 rounded px-3 py-3 w-full"
          >
            <FaCalendar className="h-5 w-5" />
            <p className="text-base leading-4">Pedidos</p>
          </Link>
          <Link
            to="libros"
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-neutral-800 focus:text-white hover:bg-neutral-800 text-neutral-400 rounded px-3 py-3 w-full"
          >
            <FaBook className="h-5 w-5" />
            <p className="text-base leading-4">Libros</p>
          </Link>
          <Link
            to="categorias"
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-neutral-800 focus:text-white hover:bg-neutral-800 text-neutral-400 rounded px-3 py-3 w-full"
          >
            <FaListUl className="h-5 w-5" />
            <p className="text-base leading-4">Categorias</p>
          </Link>
          <Link
            to="tags"
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-neutral-800 focus:text-white hover:bg-neutral-800 text-neutral-400 rounded px-3 py-3 w-full"
          >
            <FaTags className="h-5 w-5" />
            <p className="text-base leading-4">Tags</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
