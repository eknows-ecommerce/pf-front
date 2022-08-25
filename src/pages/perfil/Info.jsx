import { useState } from 'react'
import Tablas from './Tablas'
import Navbar from 'components/NavBar/Navbar'
import Editar from './Editar'

export default function Info() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* <Navbar /> */}
      {showModal && <Editar setShowModal={setShowModal} />}
      <section className="min-h-screen">
        <div className="flex flex-col">
          <Tablas setShowModal={setShowModal} />
        </div>
      </section>
    </>
  )
}
