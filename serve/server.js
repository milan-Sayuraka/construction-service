const express = require("express");
const app = express();
const { resolve } = require("path");
var cors = require('cors');
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const Stripe = require('stripe');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
app.use(express.static(process.env.STATIC_DIR));

app.use(
    cors({origin: ['http://localhost:3000', 'http://192.168.0.100:3000']})
  );

// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   res.sendFile(path);
// });

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
    // console.log('try node..', req  )
  try {

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: req.body.amount,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
   
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);