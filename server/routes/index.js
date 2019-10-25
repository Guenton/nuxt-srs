const express = require("express");
const router = express.Router();

// Api CRUD imports
const get = require("../api/get");
const post = require("../api/post");
const put = require("../api/put");
const del = require("../api/delete");

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

// //////////////////////////////////
// Employee related server calls ///
// ////////////////////////////////
router.get("/emp/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.empSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.empMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.empLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});
router.post("/emp", async (req, res) => {
  const response = await post.emp(req.body);
  res.json(response);
});
router.put("/emp/:id", async (req, res) => {
  const response = await put.emp(req.params.id, req.body);
  res.json(response);
});
router.delete("/emp/:id", async (req, res) => {
  const response = await del.emp(req.params.id);
  res.json(response);
});

// //////////////////////////////////
// Position related server calls ///
// ////////////////////////////////
router.get("/pos/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.posSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.posMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.posLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});
router.get("/pos-assig/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.posAssigSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.posAssigMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.posAssigLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});

// ///////////////////////////////
// Scope related server calls ///
// /////////////////////////////
router.get("/scope-sub/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.scopeSubSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.scopeSubMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.scopeSubLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});

// /////////////////////////////////
// Service related server calls ///
// ///////////////////////////////
router.get("/serv/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.servSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.servMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.servLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});

// Old Emp Calls

// Old Pos Calls
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
// Old Sub Calls
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

// Old Finance Calls
router.get("/cost-type", async (req, res) => {
  const response = await get.costType(req.query.id);
  res.json(response);
});
router.get("/cost-currency", async (req, res) => {
  const response = await get.costCurrency(req.query.id);
  res.json(response);
});
router.get("/cost-signature", async (req, res) => {
  const response = await get.costSignature(req.query.id);
  res.json(response);
});

// Old Service Calls
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
router.post("/service", async (req, res) => {
  const response = await post.service(req.body);
  res.json(response);
});

module.exports = router;
