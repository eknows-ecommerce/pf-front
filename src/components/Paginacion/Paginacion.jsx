/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Paginacion = ({ paginaAnterior, paginaSiguiente, paginas }) => {
  return (
    // <div className="inline-flex items-center justify-center w-full space-x-4  bg-transparent">
    //   {!isNaN(paginas?.totalPages) ? (
    //     <>
    //       <a
    //         href={'#'}
    //         onClick={paginaAnterior}
    //         className="inline-flex items-center justify-center w-8 h-8 shadow-md shadow-current rounded hover:text-rosadito-500  hover:border-rosadito-500"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-4/5 h-4/5 hover:scale-110"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </a>
    //       <p className="text-xs">
    //         {paginas?.currentPage}
    //         <span className="mx-0.5">/</span>
    //         {paginas?.totalPages}
    //       </p>

    //       <a
    //         href={'#'}
    //         onClick={paginaSiguiente}
    //         className="inline-flex items-center justify-center w-8 h-8 shadow-md shadow-current rounded hover:text-rosadito-500  hover:border-rosadito-500"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-4/5 h-4/5 hover:scale-110"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </a>
    //     </>
    //   ) : (
    //     <h1> NO HAY INFORMACION PARA MOSTRAR</h1>
    //   )}
    // </div>

  
        <div>
            <div className="max-w-8xl mx-auto container py-10">
                <ul className="flex justify-center items-center">
                    <li>
                        <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                    </li>
                  
                    <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">...</span>
                    </li>
                  
                    <li>
                        <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
            ;
        </div>
    );

}

export default Paginacion
