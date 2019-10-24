const db = require("../db/mysql");
// import query string objects
const emp = require("../sql/emp");

// prepare object for export
const post = {};

// standard error and success response variables
const dbErr = "Your Request could not be completed: DATABASE ERROR";
const dbSuc = "has successfully been added to the Database";
// standard error handler function
const errHandler = err => {
  console.error(err);
  return dbErr;
};

// ////////////////////////
// New Employee Entry ////
// //////////////////////
post.emp = async body => {
  const res = {};
  const dob = new Date(body.dob);
  try {
    const result = await db.query(emp.postMain, [body.posmain_id, body.scopesub_id]);
    const id = result.insertId;
    await db.query(emp.postName, [id, body.firstname, body.middlename, body.lastname]);
    await db.query(emp.postAddr, [id, body.addr, body.hood]);
    await db.query(emp.postEmail, [id, body.email]);
    await db.query(emp.postDob, [id, dob]);
    await db.query(emp.postIdent, [id, body.ident, body.passport]);
    res.suc = body.firstname + " " + body.lastname + " " + dbSuc;
  } catch (err) {
    res.err = errHandler(err);
  }
  return res;
};

// Position async function takes position "pos" object and returns a response "res" object with "err" and "suc" containers
post.pos = async pos => {
  const res = {};
  try {
    await db.query("INSERT INTO pos (shorthand, title) VALUES (?, ?)", [pos.shorthand, pos.title]);
    res.suc = `${pos.title} ${dbSuc}`;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = dbErr;
    return res;
  }
};

// Subsidiary async function takes position "sub" object and returns a response "res" object with "err" and "suc" containers
post.sub = async sub => {
  const res = {};
  try {
    await db.query("INSERT INTO sub (shorthand, location, title) VALUES (?, ?, ?)", [
      sub.shorthand,
      sub.location,
      sub.title
    ]);
    res.suc = `${sub.shorthand} ${dbSuc}`;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = dbErr;
    return res;
  }
};

// Service async function takes service object and returns a response "res" object with "err" and "suc" containers
post.service = async service => {
  const res = {};
  try {
    await db.query("INSERT INTO serv (described) VALUES (?)", [service.description]);
    const lastIDArray = await db.query("SELECT LAST_INSERT_ID()");
    const servId = lastIDArray[0]["LAST_INSERT_ID()"];
    await db.query(
      "INSERT INTO serv_typescope (serv_id, arch_id, type_id, depscope_id, superscope_id) VALUES (?, ?, ?, ?, ?)",
      [servId, service.archType, service.serviceType, service.depScope, service.superScope]
    );
    await db.query(
      "INSERT INTO serv_reg (serv_id, footprint, cm_year, cm_seq) VALUES (?, ?, ?, ?)",
      [servId, service.footprint, service.cmYear, service.cmSeq]
    );
    res.suc = `Service registered successfully with SID# ${servId}`;
    res.sid = servId;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = dbErr;
    return res;
  }
};

// Service async function takes service object and returns a response "res" object with "err" and "suc" containers

module.exports = post;
