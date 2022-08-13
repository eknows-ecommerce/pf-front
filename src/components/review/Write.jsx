import React from "react";

export default function ReviewModal() {
  const [showModal, setShowModal] = React.useState(false);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
            <div className="rounded-lg max-w-5xl m-5 shadow-lg relative flex flex-col bg-white outline-none w-screen">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Review
                </h3>
              </div>
              {/*body*/}
              <div className="relative m-5 p-1 flex-auto items-center border-4 rounded-2xl">
                <textarea className="text-slate-800 text-lg leading-relaxed outline-none w-full"
                  placeholder='Escriba su review' type='text' maxLength={1024} spellCheck={true}
                >
                </textarea >
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"
          />
        </>
      ) : null}
    </>
  )
}