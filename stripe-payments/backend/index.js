const cors = require("cors");
const express = require("express");
// TODO: add a stripe key
const stripe = require("stripe")(
  "sk_test_51HQpEAIuTtOiSZaZPHSwTnR01jIE0IBK8K83fvO3cDrkpga05err7De8bFam2FjPbgkCnmWooe7TiTLIHSB4Tmp400arK3sVBz"
);
const { v4: uuidv4 } = require("uuid");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("IT WORKS!!!");
});

app.post("/payment", (req, res) => {
  const { product, body } = req.body;
  console.log("PRODUCT", product);
  console.log("PRODUCTPRICE", product.price);
  const idempontencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// listen
app.listen(8282, () => console.log("LISTENING TO PORT 8282"));
