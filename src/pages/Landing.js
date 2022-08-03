import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1 className="text-6xl font-bold font-poiret-one p-10">
        Hola!, bienvenidos a e-Knews
      </h1>
      <h2 className="text-1xl font-bold font-poiret-one">
        donde encuentras tus historias
      </h2>
      <br></br>
      <h2 className="text-2xl font-semibold font-poiret-one">
        Viaja a otro universo con solo un click
      </h2>
      <br></br>
      <h2 className="text-3xl font-semibold font-poiret-one">
        K-views
      </h2>
      <h2 className="text-2xl font-poiret-one">
        Las historias mas atrapantes, a donde quieras
      </h2>
      <br></br>
      <h2 className="text-3xl font-semibold font-poiret-one">
        K-stories
      </h2>
      <h2 className="text-2xl font-poiret-one">
        Para tí, en todas las formas
      </h2>
    </div>
  )
}