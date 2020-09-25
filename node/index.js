const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const axios = require("axios");
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const REMOTE_ENDPOINT = process.env.REMOTE_ENDPOINT;

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
