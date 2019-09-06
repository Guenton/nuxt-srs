const express = require("express");
const router = express.Router();
// const db = require("../db");

router.get("/", (req, res) => {
  res.json({ API: "API is working" });
});

router.post("/emp", (req, res) => {
  console.log(req.body);
  res.send("Received");
});

module.exports = router;
