import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const REACT_APP_URL_BASE_API = process.env.REACT_APP_URL_BASE_API
const REACT_APP_STRIPE_CHECKOUT_PK = process.env.REACT_APP_STRIPE_CHECKOUT_PK

function Checkout({ detalleCompra, setCarritoLS }) {
  const stripePromise = loadStripe(REACT_APP_STRIPE_CHECKOUT_PK)
  console.log(detalleCompra)
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm detalleCompra={detalleCompra} setCarritoLS={setCarritoLS} />
    </Elements>
  )
}

function CheckoutForm({ detalleCompra, setCarritoLS }) {
  const stripe = useStripe()
  const elements = useElements()
  const [success, setSuccess] = useState({})

  const handleCheckout = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      const { id } = paymentMethod
      const { data } = await axios.post(REACT_APP_URL_BASE_API, {
        id: id,
        ...detalleCompra,
        type_method: 'card',
      })
      setSuccess({ msg: data.detalle, status: true })
      localStorage.setItem('carrito', JSON.stringify([]))
      setCarritoLS(JSON.parse(localStorage.getItem('carrito')) || [])
    }
  }

  return (
    <div className="p-10 flex justify-center">
      {!success.msg && (
        <div>
          total compra: ${detalleCompra.amount}
          <form
            onSubmit={handleCheckout}
            className="p-10 bg-orange-50 w-96 h-70 rounded-md  shadow-lg   	 "
          >
            <div>
              <CardElement />
            </div>

            <button
              type="submit"
              // disabled={'stripe'}
              className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comprar
            </button>
          </form>
        </div>
      )}

      {success.msg && success.status && (
        <div className="w-full h-full">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="m-2 text-center">
              <h4 className="m-2 text-lg font-medium text-gray-800">
                Transacción Exitosa!
              </h4>
              <p className=" m-2 text-[15px]  text-gray-500">
                Total: ${detalleCompra.amount}
              </p>
            </div>
          </div>
          <Link to="/home">
            <div className="items-center gap-2 mt-3 sm:flex">
              <button className="m-2 w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2">
                Regresar a la Tienda
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
