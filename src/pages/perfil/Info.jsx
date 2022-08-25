import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import imagen from '../../assets/img/logo.png'

import Button from 'components/templates/Button'
import Tablas from './Tablas'
import Navbar from 'components/NavBar/Navbar'

export default function Info() {
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <div className="flex flex-col">
          <Tablas />
        </div>
      </section>
    </>
  )
}
