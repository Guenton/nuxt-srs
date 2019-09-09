const express = require("express");
const router = express.Router();

// Api CRUD imports
const get = require("../api/get");
const post = require("../api/post");

router.get("/emp", async (req, res) => {
  const response = await get.emp();
  res.send(response);
});

router.get("/emp/:id", async (req, res) => {
  const response = await get.emp(req.params.id);
  res.send(response);
});

router.post("/emp", async (req, res) => {
  const response = await post.emp(req.body);
  res.send(response);
});

router.put("/emp", (req, res) => {
  console.log(req.body);
  res.send({ suc: "working" });
});

module.exports = router;
