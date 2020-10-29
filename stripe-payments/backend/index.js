const cors = require("cors");
const express = require("express");
// TODO: add a stripe key
// const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("IT WORKS!!!");
});

// listen
app.listen(8282, () => console.log("LISTENING TO PORT 8282"));
