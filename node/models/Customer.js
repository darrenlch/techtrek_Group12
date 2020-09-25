const mongoose = require("mongoose");
var moment = require("moment");

const CustomerSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerAge: {
    type: Number,
    required: true,
  },
  serviceOfficerName: {
    type: String,
    required: true,
  },
  NRIC: {
    type: String,
    required: true,
  },
  registrationTime: {
    type: String,
    default: Date.now().toString(),
  },
  branchCode: {
    type: Number,
    required: true,
  },
  //   image: {
  //     type: Blob,
  //   },
  productType: {
    type: [String],
  },
});

module.exports = mongoose.model("Customers", CustomerSchema);
