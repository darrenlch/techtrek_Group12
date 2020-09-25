const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}....`);
});
