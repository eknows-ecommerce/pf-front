import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/img/logo3.png'

export default function SectionSesion() {
  return (
    <div className='m-20 flex items-center justify-center'>
        <img src={logo}></img>
        <div >
          <h1 className="text-6xl font-bold font-poiret-one p-3 pb-0">
            Hola!, bienvenidos a e-Knews
          </h1>
          <h2 className="text-2xl font-bold font-poiret-one pl-5 pr-5">
            donde encuentras tus historias
          </h2>
          <div className='p-1 pl-10 align-center'>
            <Link to="/login" className="p-1">
              <button className="p-1 border-2 rounded-xl">Ingresar</button>
            </Link>
            <Link to="/register" className="p-1">
              <button className="p-1 border-2 rounded-xl">Registrarse</button>
            </Link>
          </div>
        </div>
    </div>
  )
}