import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1 className="font-bold font-poiret-one p-2">
        Email:
      </h1>
      <input type={"email"} className="font-bold font-poiret-one p-1 border-2"></input>
      <h1 className="font-bold font-poiret-one p-2">
        Contraseña:
      </h1>
      <input type={"password"} className="font-bold font-poiret-one p-1 border-2"></input>
      <h1 className="font-bold font-poiret-one p-2">
        Confirme contraseña:
      </h1>
      <input type={"password"} className="font-bold font-poiret-one p-1 border-2"></input>
      <div className='p-2'>
        <Link to='/register' className='p-1'>
          <button className='p-1 pt-0 border-2 rounded-xl'>
            Registrarse
          </button>
        </Link>
      </div>
      <h1 className="p-2">
        o usa la cuenta de:
      </h1>
      <div className='p-2'>
        <Link to='/login' className='p-1'>
          <button className='p-1 pt-0 border-2 rounded-xl'>
            Google img
          </button>
        </Link>
        <Link to='/login' className='p-1'>
          <button className='p-1 pt-0 border-2 rounded-xl'>
            Github img
          </button>
        </Link>
      </div>
    </div>
  )
}