import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkoutForm/checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { transactions } from "../../dummyData";
import React  from 'react';

// recreating the `Stripe` object on every render.

function StripePayment(transObj) {
  console.log('rans obj...', transObj)
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        fetch("http://localhost:5252/config").then(async (r) => {
          const { publishableKey } = await r.json();
          setStripePromise(loadStripe(`${publishableKey}`));
        });
      }, []);
  useEffect(() => {
    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      // body: JSON.stringify({}),
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"amount": transObj.amount})
    }).then(async (result) => {
      console.log('// result .......', result)
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
      updatePaymentStatus()
    });
  }, []);

  function updatePaymentStatus () {
    
  }

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default StripePayment;