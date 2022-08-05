import React from 'react'
import { Link } from 'react-router-dom'
import views from './../../assets/img/views.png'
import stories from './../../assets/img/books.jpg'

export default function SectionSesion() {
  return (
    <div className='m-10'>
      <div className='flex items-center justify-center'>
        <img src={views} about="K-views" className='w-1/2'></img>
        <div className='p-10'>
          <h2 className="text-3xl font-semibold font-poiret-one">K-views</h2>
          <h2 className="text-2xl font-poiret-one">
            Las historias mas atrapantes, a donde quieras
          </h2>
        </div>
      </div>
      <br></br>
      <div className='flex items-center justify-center'>
      <div className='p-10'>
          <h2 className="text-3xl font-semibold font-poiret-one">K-stories</h2>
          <h2 className="text-2xl font-poiret-one">
            Para tí, en todas las formas
          </h2>
        </div>
        <img src={stories} about="K-stories" className='w-2/3'></img>
      </div>
    </div>
  )
}

/*
      <Link to="/views" className="p-1">
      </Link>
      <Link to="/stories" className="p-1">
      </Link>
*/