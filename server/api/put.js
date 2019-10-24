const db = require("../db/mysql");
// import query string objects
const emp = require("../sql/emp");

// prepare put module for export
const put = {};

// standard error and success response variables
const dbErr = "Your Request could not be completed: DATABASE ERROR";
const dbSuc = "has successfully been updated in the Database";
// standard error handler function
const errHandler = err => {
  console.error(err);
  return dbErr;
};

// /////////////////////////
// Edit Employee Entry ////
// ///////////////////////
put.emp = async (id, body) => {
  const res = {};
  const dob = new Date(body.dob);
  try {
    await db.query(emp.putMain, [body.posmain_id, body.scopesub_id, id]);
    await db.query(emp.putName, [body.firstname, body.middlename, body.lastname, id]);
    await db.query(emp.putAddr, [body.addr, body.hood, id]);
    await db.query(emp.putEmail, [body.email, id]);
    await db.query(emp.putDob, [dob, id]);
    await db.query(emp.putIdent, [body.passport, body.ident, id]);
    res.suc = body.firstname + " " + body.lastname + " " + dbSuc;
  } catch (err) {
    res.err = errHandler(err);
  }
  return res;
};

// severalEmp async function takes an employee object, maps it out and waits for emp() results
put.severalEmp = async empArr => {
  const mapping = empArr.map(async emp => {
    const results = await put.emp(emp);
    return results;
  });
  const response = await Promise.all(mapping);
  return response;
};

// pos async function takes one position object and updates the DB
put.pos = async pos => {
  try {
    await db.query("UPDATE pos SET shorthand = ?, title = ? WHERE pos_id = ?", [
      pos.shorthand,
      pos.title,
      pos.pos_id
    ]);
  } catch (err) {
    return `${pos.shorthand} - ${pos.title} could not be updated: DB Error`;
  }
  return `${pos.shorthand} - ${pos.title} was updated successfully`;
};

// severalPos async function takes a position object, maps it out and waits for pos() results
put.severalPos = async posArr => {
  const mapping = posArr.map(async pos => {
    const results = await put.pos(pos);
    return results;
  });
  const response = await Promise.all(mapping);
  return response;
};

// pos async function takes one position object and updates the DB
put.sub = async sub => {
  try {
    await db.query("UPDATE sub SET shorthand = ?, location = ?, title = ? WHERE sub_id = ?", [
      sub.shorthand,
      sub.location,
      sub.title,
      sub.sub_id
    ]);
  } catch (err) {
    return `${sub.shorthand} - ${sub.title} could not be updated: DB Error`;
  }
  return `${sub.shorthand} - ${sub.title} was updated successfully`;
};

// severalSub async function takes a subsidiary object, maps it out and waits for sub() results
put.severalSub = async subArr => {
  const mapping = subArr.map(async sub => {
    const results = await put.sub(sub);
    return results;
  });
  const response = await Promise.all(mapping);
  return response;
};

module.exports = put;
