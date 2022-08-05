import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <img src="https://media.istockphoto.com/vectors/book-or-notebook-with-404-torn-out-page-vector-id1179991026"></img>
      <Link to="/" className="p-1">
        <button className="p-1 border-2 rounded-xl">Volver</button>
      </Link>
    </div>
  )
}
