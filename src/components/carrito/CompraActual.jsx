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

const stripePromise = loadStripe(
  'pk_test_51LWSCuKM9WIiKVeEkO4oZmhlBA2MUDb2bPRkYeRSwflyL2OYucDAXcGq22moEU7oAggxWmx21bvSUUdIyKnrSVRG00OeDMBEOs'
)

const CheckoutForm = ({ totalCompra }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [resp, setResp] = useState('')
  const [state, setState] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      const { id } = paymentMethod
      console.log(id)
      const { data } = await axios.post('http://localhost:8000/checkout', {
        id: id,
        amount: totalCompra * 100,
        currency: 'USD',
        description: 'Compra de libros',
        email: 'test@test.com',
        type_method: 'card',
      })
      console.log(data)
      setResp(data.amount)
      // localStorage.setItem('carrito', JSON.stringify({items: [1,2,3,4,5] ,  cant:1}))
    }
  }

  return (
    <div className="p-10 flex justify-center">
      {!resp && (
        <div>
          total compra: {totalCompra * 10000}
          <form
            onSubmit={handleSubmit}
            className="p-10 bg-orange-50 w-96 h-70 rounded-md  shadow-lg   	 "
          >
            <div>
              <CardElement />
            </div>

            <button
              type="submit"
              disabled={!state}
              className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comprar
            </button>
            {/* <div>{resp}</div> */}
          </form>
        </div>
      )}

      {resp && state ? (
        <div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setState(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3">
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
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-lg font-medium text-gray-800">
                      Transacción Exitosa!
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Total: {totalCompra}
                    </p>
                  </div>
                </div>

                <Link to="/home">
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setState(false)}
                    >
                      Regresar a la Tienda
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default function CompraActual({ totalCompra }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalCompra={totalCompra} />
    </Elements>
  )
}
