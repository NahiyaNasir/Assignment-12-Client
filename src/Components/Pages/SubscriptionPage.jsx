import { useState } from "react";
import {  useNavigate } from "react-router-dom";


const SubscriptionPage = () => {
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("");
  const navigate = useNavigate();

  const handleSubscription = () => {
    if (!subscriptionPeriod) return;
    navigate("/payment", { state: { period: subscriptionPeriod } });
  };

  return (
    <div className=" my-6">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rtX5jmR/subscriber-concept-illustration-114360-4117.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Subscribe Now !!!
              <label
                htmlFor="subscription-period"
                className="block text-lg font-medium text-gray-800"
              >
                Choose your subscription period:
              </label>
            </h1>
            <select
              id="subscription-period"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-orange-300"
              value={subscriptionPeriod}
              onChange={(e) => setSubscriptionPeriod(e.target.value)}
            >
              <option value="">Select a period</option>
              <option value="1 minute">1 Minute</option>
              <option value="5 days">5 Days</option>
              <option value="10 days">10 Days</option>
            </select>
            <button
              onClick={handleSubscription}
              className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Take Subscription
            </button>

            <p className="mb-5 text-red-600 font-bold">
              {" "}
              !!!Remember If you Subscription Period Over You Will Be Normal
              User Like before{" "}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
