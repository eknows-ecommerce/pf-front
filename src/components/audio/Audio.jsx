import { useEffect, useState } from 'react'

function Audio() {
  const [Audio, setAudio] = useState(localStorage.audio)
  useEffect(() => {
    setAudio(localStorage.audio)
  }, [localStorage.audio])

  const audioOff = () => {
    localStorage.setItem('audio', 'off')
    setAudio(localStorage.audio)
  }

  const audioOn = () => {
    localStorage.setItem('audio', 'on')
    setAudio(localStorage.audio)
  }

  return (
    <div
      className="text-xs w-11 h-4  cursor-pointer "
      title="Desactivar ScreenReader"
    >
      {' '}
      {Audio === 'on' ? (
        <div
          onClick={audioOff}
          className="text-white bg-neutral-300 rounded-md px-1"
        >
          SR: {Audio}
        </div>
      ) : (
        // <div onClick={audioOn} className='text-indigo-400 rounded-md bg-blue-100'>
        <div onClick={audioOn} title="Activar ScreenReader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          {/* SR:{' '} {Audio} */}
        </div>
      )}
    </div>
  )
}
export default Audio
