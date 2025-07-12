const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  number: Number,
  locationName: String,
  date: Date,
  loginHour: String,
  name: String,
  birthYear: Number,
  gender: String,
  email: String,
  phone: String,
  deviceBrand: String,
  digitalInterest: String,
  locationType: String,
});

module.exports = mongoose.model("Visitor", VisitorSchema);
