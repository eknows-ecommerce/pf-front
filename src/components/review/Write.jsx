import { create } from "features/actions/review";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ReviewModal({ idLibro, idUsuario }) {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    titulo: "",
    texto: "",
    rating: 3,
    likes: parseInt(Math.random() * 100),
    LibroId: idLibro,
    UsuarioId: idUsuario
  });

  //verificar errores toDo
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.titulo && form.texto) {
      dispatch(create(form));
      setShowModal(false)
      setForm({
        titulo: "",
        texto: "",
        rating: 3,
        likes: parseInt(Math.random() * 100),
        LibroId: idLibro,
        UsuarioId: idUsuario
      })
    } else {
      setShowModal(false)
      setShowModal(true)
    }
  };

  function Stars() {
    const [rate, setRate] = useState(3);
    let out = []; let star;
    for (let i = 0; i < 5; i++) {
      i < rate ? star = "text-yellow-500" : star = "text-gray-300"
      out.push(
        <label>
          <input type="radio" name="rating" className="[display:none]"
            value={form.rating} //onChange={(e) => handleChange(e)}
            onClick={() => {
              setRate(i + 1)
              form.rating = (i + 1)
            }} />
          <svg className={"w-6 h-6 hover:animate-spin " + star}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </label>
      )
    }

    return out
  }

  return (
    <>
      <button
        className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
        onClick={() => setShowModal(true)}
      >
        Escriba una review
      </button>
      {showModal ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
            <div className="rounded-lg max-w-5xl m-5 shadow-lg relative flex flex-col bg-white outline-none w-screen">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <input className="text-3xl font-semibold"
                  type="text" name="titulo" placeholder="Titulo" spellCheck={true}
                  value={form.titulo} onChange={(e) => handleChange(e)} />
                <div className="flex"><Stars /></div>
              </div>
              {/*body*/}
              <div className="relative m-5 p-1 flex-auto items-center border-4 rounded-2xl">
                <textarea className="text-slate-800 text-lg leading-relaxed outline-none w-full"
                  maxLength={1024} spellCheck={true}
                  type='text' placeholder='Escriba su review' name="texto"
                  value={form.texto} onChange={(e) => handleChange(e)}
                >
                </textarea >
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit" name="submit"
                >
                  Publicar
                </button>
              </div>
            </div>
          </form>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  )
}