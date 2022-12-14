import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getByNickname } from 'features/actions/usuarios'
import { useAuth0 } from '@auth0/auth0-react'
import { getByUser } from 'features/actions/pedidos'
import { getByUser as getFavsByUser } from 'features/actions/favoritos'
import { getByUser as getReviewByUser } from 'features/actions/review'
import Audio from 'components/audio/Audio'

export default function Perfil() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const [Speak, setSpeak] = useState(false)
  const [tags, setTags] = useState(document.getElementsByName('telefono'))
  const synth = window.speechSynthesis

  function speech(Speak) {
    tags?.forEach((tag) => {
      tag.addEventListener('click', (e) => {
        var voices = synth.getVoices()
        let msg = ''
        e.target.innerText
          ? (msg = e.target.innerText)
          : (msg = e.target.placeholder)

        var utterThis = new SpeechSynthesisUtterance(msg)
        utterThis.voice = voices[1]
        utterThis.pitch = 1
        utterThis.rate = 1

        if (synth.speaking) {
          synth.cancel()
          setTimeout(() => {
            localStorage.audio === 'on' && synth.speak(utterThis)
          }, 250)
        } else {
          synth.speak(utterThis)
        }
      })
    })
  }

  function hi(n) {
    var voices = synth.getVoices()
    var utterThis = new SpeechSynthesisUtterance('perfil actual\n' + n)
    utterThis.voice = voices[1]
    utterThis.pitch = 1
    utterThis.rate = 1
    if (synth.speaking) {
      synth.cancel()
      setTimeout(() => {
        localStorage.audio === 'on' && synth.speak(utterThis)
      }, 250)
    } else {
      synth.speak(utterThis)
    }
  }

  useEffect(() => {
    localStorage.audio === 'on' && speech(Speak)
    dispatch(getByNickname(user))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])

  useEffect(() => {
    dispatch(getByUser(usuario.id))
    dispatch(getFavsByUser(usuario.id))
    dispatch(getReviewByUser(usuario.id))
  }, [dispatch, usuario])

  return (
    <>
      <section>
        {/* <Audio /> */}
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}
