import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1 className="font-bold font-poiret-one p-2">
        Usuario:
      </h1>
      <input type={"text"} className="font-bold font-poiret-one p-1 border-2"></input>
      <h1 className="font-bold font-poiret-one p-2">
        Contraseña:
      </h1>
      <input type={"password"} className="font-bold font-poiret-one p-1 border-2"></input>
      <div className='p-2'>
        <Link to='/login' className='p-1'>
          <button className='p-1 pt-0 border-2 rounded-xl'>
            Ingresar
          </button>
        </Link>
      </div>
      <h1 className="p-2">
        o conecta con:
      </h1>
      <div className='p-1'>
        <button className='p-1 rounded-full'>
          <img src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png' width={64}></img>
        </button>
        <button className='p-1 rounded-full'>
          <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={64}></img>
        </button>
      </div>
    </div>
  )
}