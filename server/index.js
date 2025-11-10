const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const stripe = require("stripe")(stripeSecretKey);
const axios = require("axios");

const participantTypes = [
  {
    value: "scholar_student_physical",
    label: "Research Student Author (Physical Mode)",
  },
  {
    value: "scholar_student_online",
    label: "Research Student Author (Online Mode)",
  },
  {
    value: "standard_authors_physical",
    label: "Standard Authors (Physical Mode)"
  },
  { value: "standard_authors_online", label: "Standard Authors (Online Mode)" },
  {
    value: "scholar_student_participant",
    label: "Research Student Participants",
  },
  { value: "standard_participant", label: "Standard Participants" },
];


const prices = {
  "Research Student Author (Physical Mode)": 30000,
  "Research Student Author (Online Mode)": 20000,
  "Standard Authors (Physical Mode)": 35000,
  "Standard Authors (Online Mode)": 22000,
  "Research Student Participants": 20000,
  "Standard Participants": 25000,
};



app.post("/create-checkout-session", async (req, res) => {
  try {
    const userType = req.body.participantType;
    let fees = userType==='Others'?req.body.price * 100 :prices[userType];
    let currencyCode = "gbp";

    if (req.body.country === "India") {
      currencyCode = "inr";
      fees *= 110; 
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currencyCode,
            product_data: {
              name: userType
            },
            unit_amount: Math.round(fees + fees * 0.03),
          },
          quantity: 1,
        },
      ],
      custom_fields: [
        {
          key: "paper_id",
          label: {
            type: "custom",
            custom: "Paper ID",
          },
          optional: false,
          type: "text",
        },
      ],
      mode: "payment",
      success_url: "https://www.dasgri.co.uk/registration",
      cancel_url: "https://www.dasgri.co.uk/registration",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.listen(3001, (err) => {
  console.log("Server running on port 3001");
});
