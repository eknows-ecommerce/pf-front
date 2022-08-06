import React from 'react'
import { Link } from 'react-router-dom'

export default function Bienvenida() {
  return (
    <div>
      <h1 className="text-6xl font-bold font-poiret-one p-10">
        Hola!, bienvenidos a e-Knews
      </h1>
      <h2 className="text-1xl font-bold font-poiret-one">
        donde encuentras tus historias
      </h2>
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
