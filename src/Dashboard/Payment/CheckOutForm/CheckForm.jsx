
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useSurvey from "../../../Hooks/useSurvey";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";



const CheckOutForm = () => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')
  // const [donationAmount, setDonationAmount] = useState(0);
  const stripe = useStripe()
  const elements = useElements()
  const axiosSecure = useAxiosSecure()
  const navigate =useNavigate()
  const [survey,refetch] = useSurvey()
  const { user } = useAuth()
  
 const totalPrice =1000;
  useEffect(() => {
    if(totalPrice){
      axiosSecure.post('/create-payment-intent', { price: totalPrice  })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
    }
  }, [axiosSecure])
  const handelSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('payment error', error);
      setError(error.message)
    }
    else {
      console.log('payment method', paymentMethod);
      setError('')
    }

    // confirm payment 
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    });
    if (confirmError) {
      console.log('confirm error');
    }
    else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id)

     

        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(), //utc date convert
          transactionId: paymentIntent.id,
          cartIds: survey.map(item => item._id),
          menuItemIds: survey.map(item => item.cartId),
          status: 'pending'

        }
        const res = await axiosSecure.post('/payments', payment)
        console.log('payment saved', res.data);
        refetch()
        if(res.data?.paymentResult.insertedId){
          toast(`Hello  ${user?.displayName}   Sir! Your Payment is SuccessFul,You Are Now Pro User`)
        }
        navigate('/dashboard/paymentHistory')
      }
    }

 }
  return (
    <div className="p-10">
      <div><Toaster/></div>
      <form onSubmit={handelSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-warning btn-sm mt-4" type="submit" >
          Pay
        </button>
        <p className="text-red-900">{error}</p>
        {transactionId && <p className="text-green-600 font-semibold"><span className="text-black"> Your transaction Id:</span> {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;


