export default function EditarModal({
  setShowEditarModal,
  setUsuario,
  usuario,
  initialState,
  handleSubmit,
}) {
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onClick={() => setShowEditarModal(false)}
          className="w-full h-full bg-black bg-opacity-50 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Editar usuario</p>
              </div>
              <div className="px-4 md:px-10 md:pb-4 pb-7">
                <form onSubmit={handleSubmit} className="mt-11">
                  <div className="flex flex-wrap space-y-2">
                    <label className="text-sm mx-2 font-bold">Nombre</label>
                    <input
                      placeholder="Acción"
                      defaultValue={usuario.name}
                      onChange={(e) =>
                        setUsuario({ ...usuario, name: e.target.value })
                      }
                      className="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      required
                    />

                    <div className="w-full flex justify-around py-4">
                      <div>
                        <label htmlFor="rol" className="text-sm mx-2 font-bold">
                          Rol
                        </label>
                        <p>({`actual: ${usuario.rol}`})</p>
                        <select
                          id="rol"
                          onChange={(e) =>
                            setUsuario({
                              ...usuario,
                              rol:
                                e.target.value === 'cliente'
                                  ? 'cliente'
                                  : e.target.value === 'operador'
                                  ? 'operador'
                                  : e.target.value === 'cliente'
                                  ? 'cliente'
                                  : usuario.rol,
                            })
                          }
                        >
                          <option value={null}>Seleccionar</option>
                          <option value="admin">Admin</option>
                          <option value="operador">Operador</option>
                          <option value="cliente">Cliente</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="isBan"
                          className="text-sm mx-2 font-bold"
                        >
                          Estado
                        </label>
                        <p>
                          (
                          {`actual: ${
                            usuario.isBan ? 'activo' : 'inhabilitado'
                          }`}
                          )
                        </p>
                        <select
                          id="isBan"
                          onChange={(e) =>
                            setUsuario({
                              ...usuario,
                              isBan:
                                e.target.value === 'activo'
                                  ? false
                                  : e.target.value === 'inhabilitado'
                                  ? true
                                  : usuario.isBan,
                            })
                          }
                        >
                          <option value={null}>Seleccionar</option>
                          <option value="activo">Activo</option>
                          <option value="inhabilitado">Inhabilitado</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-around mt-9">
                    <button
                      onClick={() => {
                        setUsuario(initialState)
                        setShowEditarModal(false)
                      }}
                      className="px-6 py-3 bg-gray-400 hover:bg-red-700 shadow rounded text-sm text-white transition-all"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 shadow rounded text-sm text-white transition-all"
                    >
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
