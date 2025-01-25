import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

// Load your Stripe Publishable Key
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutPage = ({ totalAmount, userInfo, purchaseInfo }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-xl font-bold text-center mb-4">Checkout</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            totalAmount={totalAmount}
            userInfo={userInfo}
            purchaseInfo={purchaseInfo}
          />
        </Elements>
      </div>
    </div>
  );
};

const CheckoutForm = ({ totalAmount, userInfo, purchaseInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not loaded properly.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    // Simulate backend API call to confirm the payment
    try {
      const response = await fetch("/your-server-endpoint/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount * 100, // Convert to cents
          paymentMethodId: paymentMethod.id,
        }),
      });

      const paymentResult = await response.json();
      if (paymentResult.success) {
        navigate("/invoice", {
          state: { userInfo, purchaseInfo, totalAmount },
        });
      } else {
        setErrorMessage("Payment failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-2">Card Details</label>
        <CardElement className="border p-2 rounded-md" />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
      >
        {loading ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
      </button>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </form>
  );
};

export default CheckoutPage;
