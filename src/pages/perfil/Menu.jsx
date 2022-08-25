import Button from 'components/templates/Button'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import Logout from '../../components/sesion/Logout'
import { getByNickname } from 'features/actions/usuarios'
import { useAuth0 } from '@auth0/auth0-react'
import Audio from 'components/audio/Audio'
import { getById, getByUser } from 'features/actions/pedidos'
import Barra from './Barra'

export default function Menu() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)


 
  const [Speak, setSpeak] = useState(true)
  const [tags, setTags] = useState(document.getElementsByName('Speech'))
  const synth = window.speechSynthesis;

  function speech() {


    tags.forEach((tag) => {
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
          synth.cancel();
          setTimeout(() => { localStorage.audio === 'on' && synth.speak(utterThis); }, 1000);

        }
      })
    })
  }


  function hi() {
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance('perfil actual\n' +localStorage.user);
    utterThis.voice = voices[1];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    if (synth.speaking) {
      synth.cancel();
      setTimeout(() => { (localStorage.audio === 'on' && Speak===true) && synth.speak(utterThis); }, 1000);
    }
    else {
      synth.speak(utterThis);
    }
  }



  
  useEffect(() => {    
    let temp 
    function hi() {
      var voices = synth.getVoices();
      var utterThis = new SpeechSynthesisUtterance('perfil actual\n' +localStorage.user );
      utterThis.voice = voices[1];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      if (synth.speaking) {
        synth.cancel();
        temp = setTimeout(() => { (localStorage.audio === 'on' && Speak===true) && synth.speak(utterThis); }, 1000);
      }
      else {
        synth.speak(utterThis);
      }
    }
  
    hi()
    localStorage.audio === 'on' && speech(Speak)  
    return ()=> clearTimeout(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  useEffect(() => {
    
 
    dispatch(getByNickname(user))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])
  useEffect(() => {
    if (usuario) {
      dispatch(getByUser(usuario.id))
    }
    localStorage.setItem('user', usuario.name)
    
  }, [usuario])
  return (
    <section>
      <div>
        <div class="fixed top-5 right-5 py-2.5">
          <Audio /> 
        </div>
        <div>
          <Barra />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  )
}
