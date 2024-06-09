import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProbider";
import {  CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CheckOutForm = () => {
    const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const { period } = location.state;
  useEffect(() => {
  
      axiosSecure
        .post("/create-payment-intent",{period} )
        .then((res) => {
        //   console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret);
        });
  
  }, [axiosSecure, period]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      toast.error(error.message);
    } else {
      console.log("success card method", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
         
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
    //   console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        toast.success(paymentIntent.id);
      }
    }
     
    const res = await axiosSecure.post("/subscribe",{
        email: user?.email,
        period,
    });
    console.log(res.data);

    if(res.data?.paymentResult?.insertedId){
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " You Are Now Our Premium User",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
    return (
        <div>
                 <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-outline  my-4 mx-6"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
        </div>
    );
};

export default CheckOutForm;