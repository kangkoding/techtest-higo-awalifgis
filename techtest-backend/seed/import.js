require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const csv = require("csv-parser");
const Visitor = require("../models/Visitor");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    importData();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

function importData() {
  const results = [];

  fs.createReadStream("dataset.csv")
    .pipe(csv())
    .on("data", (data) => {
      console.log("📦 Row:", data);
      results.push({
        number: Number(data["Number"]),
        locationName: data["Name of Location"],
        date: new Date(data["Date"]),
        loginHour: data["Login Hour"],
        name: data["Name"],
        birthYear: Number(data["Age"]),
        gender: data["gender"],
        email: data["Email"],
        phone: data["No Telp"],
        deviceBrand: data["Brand Device"],
        digitalInterest: data["Digital Interest"],
        locationType: data["Location Type"],
      });
    })
    .on("end", async () => {
      try {
        await Visitor.deleteMany({});
        await Visitor.insertMany(results);
        console.log("Data imported successfully!");
        process.exit();
      } catch (err) {
        console.error("Error inserting data:", err);
        process.exit(1);
      }
    });
}
