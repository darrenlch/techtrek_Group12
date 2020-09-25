const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
const Customer = require("./models/Customer");
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const REMOTE_ENDPOINT = process.env.REMOTE_ENDPOINT;

// GET ALL CUSTOMERS
app.get("/customers", async (req, res) => {
  try {
    // .find() is a method in Mongoose to get all records, use limit to
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// CREATES A NEW CUSTOMER
app.post("/newCustomer", async (req, res) => {
  const customer = new Customer({
    customerName: req.body.customerName,
    customerAge: req.body.customerAge,
    serviceOfficerName: req.body.serviceOfficerName,
    NRIC: req.body.NRIC,
    branchCode: req.body.branchCode,
    productType: req.body.productType,
  });

  try {
    // Save to DB
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// DELETES A NEW CUSTOMER
app.delete("/customers/:id", async (req, res) => {
  try {
    const deletedCustomer = await Customer.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedCustomer);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to DB!")
);

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}....`);
});

app.post("/login", (req, res) => {
  axios
    .post(REMOTE_ENDPOINT + "/login", req.body)
    .then(({ data }) => res.send(data))
    .catch(({ response: { data: { error } } }) => res.status(error.statusCode).send(error.message));
});

app.get("/extendSession", (req, res) => {
  axios
    .get(REMOTE_ENDPOINT + "/extendSession", { headers: { Authorization: req.headers.authorization } })
    .then(({ data }) => res.send(data))
    .catch(({ response: { data: { error } } }) => res.status(error.statusCode).send(error.message));
});
