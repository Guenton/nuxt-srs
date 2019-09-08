const express = require("express");
const router = express.Router();

// Api CRUD imports
const post = require("../api/post");
const get = require("../api/get");

router.post("/emp", async (req, res) => {
  const response = await post.emp(req.body);
  res.json(response);
});

router.get("/emp", async (req, res) => {
  const response = await get.emp();
  res.json(response);
});

router.get("/emp/:id", async (req, res) => {
  const response = await get.emp(req.params.id);
  res.json(response);
});

module.exports = router;
