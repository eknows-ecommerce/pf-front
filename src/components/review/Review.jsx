import React from 'react'
import { useSelector } from 'react-redux'

export default function ReviewCard({ title, text, author, rate, likes }) {
  function Stars() {
    let out = []
    let star
    for (let i = 0; i < 5; i++) {
      i < rate
        ? (star = 'hover:animate-spin text-yellow-500')
        : (star = 'text-gray-300')
      out.push(
        <svg
          key={crypto.randomUUID()}
          xmlns="http://www.w3.org/2000/svg"
          className={'w-6 h-6 my-2 ' + star}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return out
  }

  const [showModal, setShowModal] = React.useState(false)

  const { usuarios } = useSelector(({ usuariosStore }) => usuariosStore)
  const name = usuarios.find((u) => u.id === author)?.name;

  return (
    <>
      <blockquote
        className="flex flex-col justify-between h-full p-8 bg-slate-100 rounded-3xl shadow-xl hover:scale-x-[1.01] hover:scale-y-[1.01]"
        onClick={() => setShowModal(true)}
      >
        <div>
          <div className="flex flex-rows justify-between">
            <div className="flex"><Stars /></div>
            {/*<p>{likes}👍</p>*/}
          </div>
          <div className="mt-4">
            <h5 className="text-xl text-center font-bold text-pink-700 sm:text-2xl">
              {title}
            </h5>
            <p className="mt-4 text-gray-800 text-justify">
              {text.length > 170
                ? text.slice(0, text.indexOf(' ', 170)) + ' ...'
                : text}
            </p>
          </div>
        </div>
        <footer className="mt-8 text-gray-700 text-right">- {name}</footer>
      </blockquote>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
            <div className="rounded-lg max-w-5xl m-5 shadow-lg relative flex flex-col bg-white outline-none w-screen">
              <header className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h1 className="text-3xl font-semibold"> {title}</h1>
                <div className="flex"><Stars /></div>
                <div className="flex">
                  {/*<p>{likes}<button onClick={() => { }}>👍</button></p>*/}
                  <button
                    className="text-red-500 borde-5 background-transparent font-bold uppercase mb-6 ml-6"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
              </header>
              <body className="relative m-5 p-1 text-slate-800 text-lg font-medium leading-relaxed outline-none w-full">
                {text}
              </body>
              <footer className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                - {name}
              </footer>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  )
}
