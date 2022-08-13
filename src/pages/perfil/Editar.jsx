import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../features/actions/usuarios'
export default function Editar() {
   const { usuario } = useSelector(
     ({ usuariosStore }) => usuariosStore
  )
 
  const dispatch = useDispatch()
  const[input, setInput] = useState({
    name: "",
    pais: "",
    ciudad: "",
    telefono: "",
    email: ""
  })
  const  handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(update({id: usuario.id, datos: input }))
    alert("Cambios guardados con éxito!");
    setInput({});
    setInput({
      name: "",
      pais: "",
      ciudad: "",
      telefono: "",
      email: ""
     })
    
  }
  const handleChange = (e) =>{
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    
    
  }
//   return (
//     <>
//       <div>
//         <div className="md:grid md:grid-cols-3 md:gap-6">
//           <div className="md:col-span-1">
//           </div>
//           <div className="mt-5 md:mt-0 md:col-span-2">
//             <form onSubmit={handleSubmit} >
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div>
//                     <label className="block text-lg   font-poiret-one font-extrabold text-black ">
//                       {' '}
//                       Photo{' '}
//                     </label>
//                     <div className="mt-1 flex items-center">
//                       <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
//                         <svg
//                           className="h-full w-full text-gray-300"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                         </svg>
//                       </span>
//                       <button
//                         type="button"
//                         className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Change
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-6 gap-6">
//                   <div className="col-span-6 sm:col-span-3">
//                     <label
//                       htmlFor="first-name"
//                       className="block text-lg   font-poiret-one font-extrabold text-black "
//                     >
//                       Nombre
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={input.name}
//                       id="first-name"
//                       autoComplete="given-name"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                       onChange={(e)=>handleChange(e)}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-4">
//                     <label
//                       htmlFor="email-address"
//                       className="block text-lg   font-poiret-one font-extrabold text-black "
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={input.email}
//                       id="email-address"
//                       autoComplete="email"
//                       onChange={(e)=>handleChange(e)}
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                   <div className="col-span-6 sm:col-span-4">
//                     <label
//                       htmlFor="email-address"
//                       className="block text-lg   font-poiret-one font-extrabold text-black "
//                     >
//                       Pais
//                     </label>
//                     <input
//                       type="text"
//                       name="pais"
//                       value={input.pais }
//                       onChange={(e)=>handleChange(e)}

//                       id="email-address"
//                       autoComplete="email"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6">
//                     <label
//                       htmlFor="street-address"
//                       className="block text-lg   font-poiret-one font-extrabold text-black "
//                     >
//                       Ciudad
//                     </label>
//                     <input
//                       type="text"
//                       name="ciudad"
//                       value={input.ciudad }
//                       onChange={(e)=>handleChange(e)}
//                       id="street-address"
//                       autoComplete="street-address"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                     <label
//                       htmlFor="postal-code"
//                       className="block text-lg   font-poiret-one font-extrabold text-black "
//                     >
//                       Telefono
//                     </label>
//                     <input
//                       type="text"
//                       name="telefono"
//                       value={input.telefono }
//                       onChange={(e)=>handleChange(e)}
//                       id="telefono"
//                       autoComplete="postal-code"
//                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     onClick={handleSubmit}
//                     className="inline-flex justify-center  font-poiret-one font-extrabold py-2 px-4 border border-transparent shadow-sm  rounded-md text-white bg-rosadito-600 hover:bg-violetapaleta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

    return (
        <>
            <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
                <div onSubmit={handleSubmit} className="w-full h-full bg-green-50 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center  justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                            <div className="bg-red-50 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base  font-semibold">Editar Perfil</p>
                                <button onclick="popuphandler(false)" className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                                <div className="flex items-center justify-center">
                                    <div className="w-40 h-40 p-16 bg-gray-100 rounded-md flex items-center justify-center">
                                        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 12H22.515" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <form className="mt-11">
                                    <div className="flex items-center space-x-9">
     
                                        <input placeholder="Nombre" value={input.name} onChange={(e)=>handleChange(e)} className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <input placeholder="Telefono" value={input.telefono} type="number" onChange={(e)=>handleChange(e)} className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        
                                    </div>
                                    <div className="flex items-center space-x-9 mt-8">

                                        <input placeholder="Pais" type="text" onChange={(e)=>handleChange(e)} value={input.pais }  className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <input placeholder="Ciudad" type="text" onChange={(e)=>handleChange(e)} value={input.ciudad }  className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                                         
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <textarea placeholder="Resumen" className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} />
                                    </div>
                                </form>
                                <div className="flex items-center justify-between mt-9">
                                    <button onclick="popuphandler(false)" className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                        Cancel
                                    </button>
                                    <button  onClick={handleSubmit} className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Crear Producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

