import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
    const location = useLocation();
    const { period } = location.state;
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_SECRET)
    return (
        <div>
          <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <p className="text-lg">You have selected a subscription period of: <strong>{period}</strong></p>
        {/* Payment form  */}

        <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
         </Elements>
      </div>
    </div>

        </div>
    );
};

export default Payment;