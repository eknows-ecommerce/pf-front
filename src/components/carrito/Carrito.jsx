import { useSelector } from 'react-redux'
import { useState } from 'react';


function Carrito() {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || { items: [] })
  const [continuarCompra, setContinuarCompra] = useState(false)

  
  const resp = useSelector(state=> state.librosStore.libros)

  

  var subtotal, total = 0;

  const removeItem = (id) => {
    localStorage.setItem('carrito', JSON.stringify({ ...carrito, items: carrito.items.filter(i => i.id !== id) }))
    setCarrito(carrito ? JSON.parse(localStorage.getItem('carrito')) : { items: [] })
  }

  const modifyAmount = (id, op) => {
    if (op === 'add') {
      localStorage.setItem('carrito', JSON.stringify({ ...carrito, items: carrito.items.map(i => i.id !== id ? i : { ...i, cant: i.cant + 1 }) }))
    } else {
      localStorage.setItem('carrito', JSON.stringify({ ...carrito, items: carrito.items.map(i => i.id !== id ? i : { ...i, cant: i.cant - 1 < 1 ? 1 : i.cant - 1 }) }))
    }
    setCarrito(carrito ? JSON.parse(localStorage.getItem('carrito')) : { items: [] })
  }

  return (
    
    <div>
      Carrito
      {resp.map((l, i) => {
        
        console.log(l)
        console.log(carrito)
        let item = carrito.items.filter(el => el.id === l.id)
        return carrito && item.length > 0 ? (  

          <div className="p-10 flex items-center" key={'libro_' + i}>
            <div className=" bg-orange-50 w-48 h-70 rounded-md overflow-hidden shadow-lg grid justify-items-center 	 ">
              <img className="h-40 w-28 5 " src={l.portada} alt="Mountain" />
              <div className="px-6 py-4 h-20">

                <hr />

                <div >

                  <p className="text-gray-700 text-sm ">
                    {console.log(carrito)}

                    <button className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 my-1.5 text-white" onClick={() => modifyAmount(l.id, 'substract')}> - </button>
                    {' '}cant:{carrito.items.filter(elem => elem.id === l.id)[0].cant} {' '}
                    <button className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-1.5 text-white" onClick={() => modifyAmount(l.id, 'add')}> + </button>
                  </p>
                  <button className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 text-white mx-1"> details </button>
                  <button className="rounded bg-indigo-300 text-xs hover:bg-blue-700 py-0 px-2 text-white mx-1" onClick={() => removeItem(l.id)}> remove </button>                  
                </div>
              </div>
            </div>
            <div className="  white-50 w-1/2 h-60 rounded-md overflow-hidden shadow-lg mx-4 px-4 text-left ">

              <div className="font-bold text-base "> {l.titulo}  </div>
              <div > {l.autor}  </div>
              <br />
              <div className="text-sm ">
                <div> Valor Unidad: $ {l.precio.toFixed(2)}  </div>
                {subtotal = l.precio * carrito.items.filter(elem => elem.id === l.id)[0].cant}
                <div> Subtotal: $ {' '} {subtotal.toFixed(2)} </div>
              </div>
              <br />

            </div>
            <div>total actual: {(total = total + subtotal).toFixed(2)}</div>
          </div>
        ) : null
      })}
      <div className="overflow-hidden p-4 shadow-lg  flex justify-center items-center">

      <button onClick={() => setContinuarCompra(true)} type="button" disabled={continuarCompra} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Continuar compra
        <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

      </button>

      </div>

    </div>

  )
}
export default Carrito;

