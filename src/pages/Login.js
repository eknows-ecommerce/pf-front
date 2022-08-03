import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1 className="text 2xl font-bold font-poiret-one p-2">
        Email:
      </h1>
      <input type={"email"}></input>
      <h1 className="text 2xl font-bold font-poiret-one p-2">
        Contraseña:
      </h1>
      <input type={"password"}></input>
    </div>
  )
}