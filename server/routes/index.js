const express = require("express");
const router = express.Router();

// Api CRUD imports
const get = require("../api/get");
const post = require("../api/post");
const put = require("../api/put");
const del = require("../api/delete");

// //////////////////////////////////
// Employee related server calls ///
// ////////////////////////////////
router.get("/emp", async (req, res) => {
  const response = await get.emp(req.query.id);
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
router.delete("/emp", async (req, res) => {
  const response = await del.emp(req.query.id);
  res.json(response);
});

// //////////////////////////////////
// Position related server calls ///
// ////////////////////////////////
router.get("/pos", async (req, res) => {
  const response = await get.pos(req.query.id);
  res.json(response);
});
router.post("/pos", async (req, res) => {
  const response = await post.pos(req.body);
  res.json(response);
});
router.put("/pos", async (req, res) => {
  const response = await put.severalPos(req.body);
  res.json(response);
});
router.delete("/pos", async (req, res) => {
  const response = await del.pos(req.query.id);
  res.json(response);
});

// ////////////////////////////////////
// Subsidiary related server calls ///
// //////////////////////////////////
router.get("/sub", async (req, res) => {
  const response = await get.sub(req.query.id);
  res.json(response);
});
router.post("/sub", async (req, res) => {
  const response = await post.sub(req.body);
  res.json(response);
});
router.put("/sub", async (req, res) => {
  const response = await put.severalSub(req.body);
  res.json(response);
});
router.delete("/sub", async (req, res) => {
  const response = await del.sub(req.query.id);
  res.json(response);
});

// /////////////////////////////////
// Service related server calls ///
// ///////////////////////////////
router.get("/service", async (req, res) => {
  const response = await get.service(req.query.id);
  res.json(response);
});
router.get("/service/:archId", async (req, res) => {
  const response = await get.serviceByArch(req.params.archId);
  res.json(response);
});
router.get("/service-archtype", async (req, res) => {
  const response = await get.serviceArchtype(req.query.archId);
  res.json(response);
});
router.get("/service-depscope", async (req, res) => {
  const response = await get.serviceDepScope(req.query.depScopeId);
  res.json(response);
});
router.get("/service-superscope", async (req, res) => {
  const response = await get.serviceSuperScope(req.query.superScopeId);
  res.json(response);
});
router.get("/serv/:target", async (req, res) => {
  const target = req.params.target;
  if (target === "pre") {
    const response = await get.servicePreData(req.query.sid);
    return response;
  } else {
    res.status(404);
  }
});
router.post("/service", async (req, res) => {
  const response = await post.service(req.body);
  res.json(response);
});

// ////////////////////////////////
// Normal Assignation Requests ///
// //////////////////////////////
router.get("/normas", async (req, res) => {
  const response = await get.normAsByPos(req.query.posId);
  res.json(response);
});

// //////////////////////////
// Search Query Handlers ///
// ////////////////////////
router.get("/search/:target", async (req, res) => {
  const target = req.params.target;
  if (target === "emp") {
    const response = await get.empSearch(req.query.query);
    res.json(response);
  } else if (target === "pos") {
    const response = await get.posSearch(req.query.query);
    res.json(response);
  } else if (target === "sub") {
    const response = await get.subSearch(req.query.query);
    res.json(response);
  } else if (target === "footprint") {
    const response = await get.footprintSearch(req.query.query);
    res.json(response);
  } else {
    res.status(404);
  }
});

module.exports = router;
