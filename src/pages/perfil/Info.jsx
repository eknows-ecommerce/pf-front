import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import imagen from '../../assets/img/logo.png'

import Button from 'components/templates/Button'
import Tablas from './Tablas'
import Navbar from 'components/NavBar/Navbar'
import Editar from './Editar'

export default function Info() {
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Navbar />
      {showModal && <Editar setShowModal={setShowModal} />}
      <section className="min-h-screen">
        <div className="flex flex-col">
          <Tablas setShowModal={setShowModal} />
        </div>
      </section>
    </>
  )
}
