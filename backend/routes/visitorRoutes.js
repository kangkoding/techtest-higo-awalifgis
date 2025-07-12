const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const skip = (page - 1) * limit;

    const query = search
      ? {
          name: { $regex: search, $options: "i" }, // cari berdasarkan nama (case-insensitive)
        }
      : {};

    const total = await Visitor.countDocuments(query);
    const visitors = await Visitor.find(query)
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
      data: visitors,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/summary", async (req, res) => {
  try {
    const [gender, interest, device] = await Promise.all([
      Visitor.aggregate([{ $group: { _id: "$gender", total: { $sum: 1 } } }]),
      Visitor.aggregate([
        { $group: { _id: "$digitalInterest", total: { $sum: 1 } } },
      ]),
      Visitor.aggregate([
        { $group: { _id: "$deviceBrand", total: { $sum: 1 } } },
      ]),
    ]);

    res.json({ gender, interest, device });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/sample", async (req, res) => {
  const visitor = await Visitor.findOne();
  res.json(visitor);
});

module.exports = router;
