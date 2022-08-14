import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

import { useState } from 'react';

const stripePromise = loadStripe("pk_test_51LWSCuKM9WIiKVeEkO4oZmhlBA2MUDb2bPRkYeRSwflyL2OYucDAXcGq22moEU7oAggxWmx21bvSUUdIyKnrSVRG00OeDMBEOs")

const CheckoutForm = ({totalCompra}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [resp, setResp] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })                 

        if(!error) {
            const {id} = paymentMethod;
            console.log(id)
            const {data} = await axios.post("http://localhost:8000/checkout", {
                id: id,
                currency: 'COP',
                amount: totalCompra*10000,              
                description: 'Compra de libros'
            })
                        
            setResp(data.message)
            // localStorage.setItem('carrito', JSON.stringify({items: [1,2,3,4,5] ,  cant:1}))
        }
    }

    return (
        <div className="p-10 flex justify-center">
            <form onSubmit={handleSubmit} className="p-10 bg-orange-50 w-96 h-70 rounded-md  shadow-lg   	 " >
                <div  >
                    <CardElement />
                </div>
                
                <button type="submit" disabled={resp} className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Comprar
                </button>
            <div>{resp}</div>
            </form>
        </div>
    )
}


export default function CompraActual({totalCompra}) {
    
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm totalCompra={totalCompra}/>
        </Elements>
    )
}
