import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
    return (
        <div>
            <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
        </div>
    );
};

export default Payment;