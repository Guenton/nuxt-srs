const express = require("express");
const router = express.Router();

// Api CRUD imports
const get = require("../api/get");
const post = require("../api/post");
const put = require("../api/put");

router.get("/emp", async (req, res) => {
  const response = await get.emp();
  res.json(response);
});

router.get("/emp/:id", async (req, res, next) => {
  const response = await get.emp(req.params.id);
  res.json(response);
});

router.post("/emp", async (req, res) => {
  const response = await post.emp(req.body);
  res.json(response);
});

router.put("/emp", async (req, res) => {
  const response = await put.severalEmp(req.body);
  res.json(response);
});

router.get("/search/:target", async (req, res) => {
  const target = req.params.target;
  if (target === "emp") {
    const response = await get.empSearch(req.query.query);
    res.json(response);
  } else {
    res.status(404);
  }
});

module.exports = router;
