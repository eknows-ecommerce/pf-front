import React, { useState } from 'react'
import images from 'assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Navegacion() {
  let menuArray = [true, false, false]
  const [menu, setMenu] = useState(menuArray)
  const [show, setShow] = useState(true)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const setMenuValue = (props) => {
    let newArr = [...menu]
    newArr[props] = !newArr[props]
    setMenu(newArr)
  }

  return (
    <div className="h-full fixed w-full">
      <div className="bg-slate-800 xl:hidden flex justify-between w-full px-6 py-4 items-center">
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
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
        } transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-slate-800 flex-col`}
      >
        <div className="hidden xl:flex justify-start p-6 py-4 items-center space-x-3">
          <Link to="/" className="w-10 h-10 bg-transparent">
            <img
              src={images}
              alt="logo"
              className="w-10 h-10 bg-transparent object-cover rounded-full hover:scale-110 transition duration-700 ease-in-out"
            />
          </Link>
          <p className="text-2xl leading-6 text-white">Eknows</p>
        </div>
        <div className="flex flex-col pb-6 px-6 w-full items-center justify-center">
          <div className=" flex justify-between items-center pt-5 w-full">
            <Link
              to="/menu"
              className="flex justify-center items-center space-x-2"
            >
              <div className="cursor-pointer">
                <img
                  className="rounded-full h-8 w-8"
                  src={usuario.picture}
                  alt="avatar"
                />
              </div>
              <div className="flex justify-start flex-col items-start">
                <p className="cursor-pointer text-sm leading-5 text-white">
                  {usuario.name}
                </p>
                <p className="cursor-pointer text-xs leading-3 text-gray-300">
                  {usuario.email}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full border-gray-600 border-b space-y-2 pb-5 ">
          <Link
            to="dashboard"
            className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded hover:bg-gray-700 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <p className="text-base leading-4 ">Dashboard</p>
          </Link>
          <Link
            to="usuarios"
            className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded hover:bg-gray-700 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-base leading-4 ">Usuarios</p>
          </Link>
          <Link
            to="/"
            className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded hover:bg-gray-700 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            <p className="text-base leading-4 ">Volver</p>
          </Link>
        </div>
        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
          <button
            onClick={() => setMenuValue(0)}
            className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  "
          >
            <p className="text-sm leading-5  uppercase">Administracion</p>
            <svg
              id="icon1"
              className={`${
                menu[0] ? '' : 'rotate-180'
              } transform duration-100`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id="menu1"
            className={`${
              menu[0] ? 'flex' : 'hidden'
            } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
          >
            <Link
              to="ventas"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-base leading-4">Ventas</p>
            </Link>
            <Link
              to="stock"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <p className="text-base leading-4">Stock</p>
            </Link>
            <Link
              to="categorias"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <p className="text-base leading-4">Categorias</p>
            </Link>
            <Link
              to="tags"
              className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
              <p className="text-base leading-4">Tags</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
