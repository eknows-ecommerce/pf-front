import { useState } from 'react'
import Tablas from './Tablas'
import Editar from './Editar'
import Audio from 'components/audio/Audio'

export default function Info() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && <Editar setShowModal={setShowModal} />}
      <section className="min-h-screen">
        <div className="flex flex-col">
          <Tablas setShowModal={setShowModal} />
        </div>
      </section>
    </>
  )
}
