import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/img/logo3.png'

export default function SectionSesion() {
  return (
    <div>
      <div className='display: flex'>
        <img src={logo}></img>
        <div>
          <h1 className="text-6xl font-bold font-poiret-one p-5">
            Hola!, bienvenidos a e-Knews
          </h1>
          <h2 className="text-1xl font-bold font-poiret-one p-5">
            donde encuentras tus historias
          </h2>
        </div>
      </div>
      <div>
        <Link to="/login" className="p-1">
          <button className="p-1 border-2 rounded-xl">Ingresar</button>
        </Link>
        <Link to="/register" className="p-1">
          <button className="p-1 border-2 rounded-xl">Registrarse</button>
        </Link>
      </div>
    </div>
  )
}

/*
      <img about="K-views"></img>
      <Link to="/views" className="p-1">
      </Link>
      <img about="K-stories"></img>
      <Link to="/stories" className="p-1">
      </Link>
*/