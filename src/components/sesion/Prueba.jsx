import React from "react";

const Prueba = () => {
    return (
        // <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        //     <div className="flex justify-start item-start space-y-2 flex-col ">
        //         <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
        //         <p className="text-base font-medium leading-6 text-gray-600"> 10 Ago 2022 10:34 PM</p>
        //     </div>
        //     <div className="mt-10 flex flex-col absolute xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        //         <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        //             <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        //                 <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Tu carrito</p>
        //                 <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
        //                     <div className="pb-4 md:pb-8 w-full md:w-40">
        //                         <img className="w-full hidden md:block" src="https://www.angeldecuir.com.mx/wp-content/uploads/2019/05/1-Juego-de-tronos-673x1024.jpg" alt="dress" />
        //                     </div>
        //                     <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        //                         <div className="w-full flex flex-col justify-start items-start space-y-8">
        //                             <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Juego de Tronos</h3>
        //                             <div className="flex justify-start items-start flex-col space-y-2">
        //                             <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">Categoria: </span> Juvenile Fiction
        //                                 </p>
        //                                 <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">tags: </span> tags
        //                                 </p>
        //                                 <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">Formato: </span> e-book/ fisico
        //                                 </p>
        //                             </div>
        //                         </div>
        //                         <div className="flex justify-between space-x-8 items-start w-full">
        //                             <p className="text-base xl:text-lg leading-6">
        //                                 $36.00 <span className="text-red-300 line-through"> $45.00</span>
        //                             </p>
        //                             <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
        //                             <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
        //                     <div className="w-full md:w-40">
        //                         <img className="w-full hidden md:block" src="https://http2.mlstatic.com/D_NQ_NP_686062-MLA49101382108_022022-V.jpg" alt="dress" />
        //                     </div>
        //                     <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
        //                         <div className="w-full flex flex-col justify-start items-start space-y-8">
        //                             <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Harry Potter y el legado maldito</h3>
        //                             <div className="flex justify-start items-start flex-col space-y-2">
        //                                 <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">Categoria: </span> Juvenile Fiction
        //                                 </p>
        //                                 <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">tags: </span> tags
        //                                 </p>
        //                                 <p className="text-sm leading-none text-gray-800">
        //                                     <span className="text-gray-300">Formato: </span> e-book/ fisico
        //                                 </p>
        //                             </div>
        //                         </div>
        //                         <div className="flex justify-between space-x-8 items-start w-full">
        //                             <p className="text-base xl:text-lg leading-6">
        //                                 $20.00 <span className="text-red-300 line-through"> $30.00</span>
        //                             </p>
        //                             <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
        //                             <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        //                 <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
        //                     <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
        //                     <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        //                         <div className="flex justify-between  w-full">
        //                             <p className="text-base leading-4 text-gray-800">Subtotal</p>
        //                             <p className="text-base leading-4 text-gray-600">$56.00</p>
        //                         </div>
        //                         <div className="flex justify-between items-center w-full">
        //                             <p className="text-base leading-4 text-gray-800">
        //                                 Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
        //                             </p>
        //                             <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
        //                         </div>
        //                         <div className="flex justify-between items-center w-full">
        //                             <p className="text-base leading-4 text-gray-800">Shipping</p>
        //                             <p className="text-base leading-4 text-gray-600">$8.00</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex justify-between items-center w-full">
        //                         <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
        //                         <p className="text-base font-semibold leading-4 text-gray-600">$36.00</p>
        //                     </div>
        //                 </div>
                       
        //             </div>
        //         </div>
        //         <div className="bg-gray-50 w-full sticky  xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
        //             <h3 className="text-xl font-semibold leading-5 text-gray-800">Usuario</h3>
        //             <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
        //                 <div className="flex flex-col  justify-start items-start flex-shrink-0">
        //                     <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
        //                         <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
        //                         <div className=" flex justify-start items-start flex-col space-y-2">
        //                             <p className="text-base font-semibold leading-4 text-left text-gray-800">Cosme Fulanito</p>
        //                         </div>
        //                     </div>

        //                     <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
        //                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                             <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
        //                             <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
        //                         </svg>
        //                         <p className="cursor-pointer text-sm leading-5 text-gray-800">david89@gmail.com</p>
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
        //                     <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
        //                         <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
        //                             <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
        //                             <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
        //                         </div>
        //                         <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
        //                             <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
        //                             <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex w-full justify-center items-center md:justify-start md:items-start">
        //                         <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Edit Details</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
        <div className="flex flex-col h-full relative p-6 space-y-4 sm:p-10 dark:bg-gray-200 dark:text-black">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <div className= "flex flex-row justify-start item-center ">
        <ul className="flex flex-col flex-start  w-full divide-y divide-gray-700">
            <li className="flex flex-col  py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                                <p className="text-sm dark:text-gray-400">Classic</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">59.99€</p>
                                <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                <p className="text-sm dark:text-gray-400">White</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">99.95€</p>
                                <p className="text-sm line-through dark:text-gray-600">150€</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                <p className="text-sm dark:text-gray-400">White</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">99.95€</p>
                                <p className="text-sm line-through dark:text-gray-600">150€</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                <p className="text-sm dark:text-gray-400">White</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">99.95€</p>
                                <p className="text-sm line-through dark:text-gray-600">150€</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/phodark:to-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Set of travel chargers" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">Set of travel chargers</h3>
                                <p className="text-sm dark:text-gray-400">Black</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">8.99€</p>
                                <p className="text-sm line-through dark:text-gray-600">15.99€</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div className= "absolute top-2 right-2">
        <div className="space-y-1 fixed-bottom text-right">
            <p>Total amount:
                <span className="font-semibold">357 €</span>
            </p>
            <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
        </div>
        <div className="flex justify-end space-x-4">
            <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
            </button>
        </div>
        </div>
        </div>
        
    </div>
        )
};

export default Prueba;
