import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react'

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const REACT_APP_URL_BASE_API = process.env.REACT_APP_URL_BASE_API
const REACT_APP_STRIPE_CHECKOUT_PK = process.env.REACT_APP_STRIPE_CHECKOUT_PK

const inputStyle = {
  iconColor: '#c4f0ff',
  color: '#6C648B',
  fontWeight: '500',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '17px',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#CFCCDA',
  },
  '::placeholder': {
    color: '#C4C0D2',
  },
}
const CardInputWrapper = styled.div`
  border: 1px solid #c4c0d2;
  border-radius: 4px;
  padding: 10px 5px 10px 5px;
`

function Checkout({ detalleCompra, setCarritoLS }) {
  const stripePromise = loadStripe(REACT_APP_STRIPE_CHECKOUT_PK)
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
  const [Bill, setBill] = useState(false)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  const { logout } = useAuth0()

  useEffect(() => {
    if (usuario.isBan === true) {
      Swal.fire({
        title: 'Log in',
        text: 'Tu cuenta ha sido temporalmente deshabilitada',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entendido',
      }).then((result) => {
        if (result.isConfirmed) {
          logout()
        } else {
          logout()
        }
      })
    }
  }, [usuario])

  const handleCheckout = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
    if (detalleCompra.amount === 0) {
    }
    if (!error) {
      setBill(true)
      const { id } = paymentMethod
      const { data } = await axios.post(REACT_APP_URL_BASE_API, {
        id: id,
        ...detalleCompra,
        type_method: 'card',
      })

      setBill(false)
      setSuccess({ msg: data.detalle, status: true })

      localStorage.setItem('carrito', JSON.stringify([]))
      setCarritoLS(JSON.parse(localStorage.getItem('carrito')) || [])
    }
  }

  return (
    <div>
      {detalleCompra.amount !== 0 ? (
        !success.msg && (
          <div className="flex-row items-center  justify-between py-4 ">
            {/* total compra: ${detalleCompra.amount} */}
            <form onSubmit={handleCheckout}>
              {/* { detalleCompra.type === 'card'?   <h5 className='h-10 flex overflow-hidden text-lg text-violet-600 font-semibold'>Tarjeta de Crédito</h5> : {} } */}
              <div className="flex flex-col ">
                <div className="flex-row items-center  p-3">
                  <span className="text-base font-bold leading-none text-right text-gray-800">
                    Usuario
                  </span>
                  <h5 className="h-12 flex overflow-hidden text-lg text-violet-600 font-semibold">
                    {detalleCompra.email}
                  </h5>
                </div>

                {/* <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label> */}
                <div className="mt-2 flex-col  ">
                  <CardInputWrapper>
                    <CardElement
                      options={{
                        style: {
                          base: inputStyle,
                        },
                      }}
                    />
                  </CardInputWrapper>
                </div>

                {!Bill ? (
                  <div className="mt-4 flex-col ">
                    <button
                      type="submit"
                      // disabled={'stripe'}
                      className="text-xl font-bold leading-none bg-rosadito-500 border-rosadito-500 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white flex justify-center items-center py-2.5 rounded w-full"
                    >
                      Continuar
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center p-4">
                    <svg
                      className="flex justify-center  w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600 "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        )
      ) : (
        <div className="flex flex-col  items-center ">
          <h2 className="text-sm font-bold text-center  text-violeta-400 w-32 leading-4 lg:w-7/12 lg:leading-5 ">
            No haz agregado ningún producto al carrito
          </h2>
          <img
            className="object-contain  m-4 w-full h-56 lg:h-72  "
            // src={portada}
            src="https://www.pngitem.com/pimgs/m/480-4803650_an-empty-shopping-cart-viewed-from-the-side.png"
            alt="empty cart"
          />
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
              <p className=" m-2 text-[16px]  text-gray-800">
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
