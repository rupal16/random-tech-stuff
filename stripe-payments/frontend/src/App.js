import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./App.css";

function App() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <StripeCheckout
          stripeKey="pk_test_51HQpEAIuTtOiSZaZmlG6jwxyyK7fbAtTRTxzpbkXtDfwWO5ymtWQnUOTbl9V8iFrAij1XZXdtLD4M787IqxAoqZr00BgsKRwW7"
          token={makePayment}
          name="Buy React"
          amount={product.price * 100}
        >
          <button className="btn-large blue">Buy - ${product.price}</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
