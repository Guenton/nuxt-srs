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
router.get("/scope-dept", async (req, res) => {
  const response = await get.scopeDeptData(req.query.id);
  res.json(response);
});
router.get("/scope-locat", async (req, res) => {
  const response = await get.scopeLocatData(req.query.id);
  res.json(response);
});
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
router.get("/serv-arch/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.servArchSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.servArchMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.servArchLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});
router.get("/serv-type/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.servTypeSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.servTypeMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.servTypeLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});
router.get("/serv-typebyarch/:size", async (req, res) => {
  const size = req.params.size;
  if (size === "sm") {
    const response = await get.servTypeByArchSmData(req.query.id);
    res.json(response);
  } else if (size === "md") {
    const response = await get.servTypeByArchMdData(req.query.id);
    res.json(response);
  } else if (size === "lg") {
    const response = await get.servTypeByArchLgData(req.query.id);
    res.json(response);
  } else res.status(404);
});
router.post("/serv", async (req, res) => {
  const response = await post.serv(req.body);
  res.json(response);
});

// ///////////////////////////////////
// Statistic related server calls ///
// /////////////////////////////////
router.get("/count-log-type/:timeframe", async (req, res) => {
  const tf = req.params.timeframe;
  const id = req.query.id;
  const type = req.query.type;
  const date = req.query.date;
  if (tf === "day") {
    const dtstart = new Date(date);
    const dtstop = new Date(date);
    dtstop.setHours(23, 59, 59);
    const response = await get.servLogCountByType(id, type, dtstart, dtstop);
    res.json(response);
  } else if (tf === "week") {
    const dtstart = new Date(date);
    const dtstop = new Date(date);
    dtstop.setDate(dtstop.getDate() + 6);
    dtstop.setHours(23, 59, 59);
    const response = await get.servLogCountByType(id, type, dtstart, dtstop);
    res.json(response);
  } else if (tf === "month") {
    const dtstart = new Date(date);
    const dtstop = new Date(date);
    dtstop.setMonth(dtstop.getMonth() + 1);
    dtstop.setDate(0);
    dtstop.setHours(23, 59, 59);
    const response = await get.servLogCountByType(id, type, dtstart, dtstop);
    res.json(response);
  } else if (tf === "year") {
    const dtstart = new Date(date);
    const dtstop = new Date(date);
    dtstop.setFullYear(dtstop.getFullYear() + 1);
    dtstop.setDate(0);
    dtstop.setHours(23, 59, 59);
    const response = await get.servLogCountByType(id, type, dtstart, dtstop);
    res.json(response);
  } else if (!tf) {
    const response = await get.servLogCountByType(id, type);
    res.json(response);
  } else res.status(404);
});

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

module.exports = router;
