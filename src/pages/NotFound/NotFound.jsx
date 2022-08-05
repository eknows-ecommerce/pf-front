import React from 'react'
import { Link } from 'react-router-dom'
import notFound from './../../assets/img/404.jpg'

export default function NotFound() {
  return (
    <div>
      <img src={notFound}></img>
      <Link to="/" className="p-1">
        <button className="p-1 border-2 rounded-xl">Volver</button>
      </Link>
    </div>
  )
}
