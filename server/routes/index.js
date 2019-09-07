const express = require("express");
const router = express.Router();

// Api CRUD imports
const post = require("../api/post");
const get = require("../api/get");

router.post("/emp", (req, res) => {
  const response = post.emp(req.body);
  res.json(response);
});

router.get("/emp", (req, res) => {
  const response = get.emp();
  res.json(response);
});

router.get("/emp/:id", (req, res) => {
  const response = get.emp(req.params.id);
  res.json(response);
});

module.exports = router;
