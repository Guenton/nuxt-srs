const db = require("../db/mysql");
// import query string objects
const emp = require("../sql/emp");

// prepare put module for export
const del = {};

// standard error and success response variables
const dbErr = "Request could not be completed: DATABASE ERROR";
const dbExist = " does not exist in the Database";
const dbSuc = " has successfully been deleted from the Database";
// standard error handler function
const errHandler = err => {
  console.error(err);
  return dbErr;
};

// /////////////////////
// Delete Employee ////
// ///////////////////
del.emp = async id => {
  const res = {};
  try {
    const resultArr = await db.query(emp.countById, [id]);
    if (resultArr[0].count === 0) res.err = "Employee #" + id + dbExist;
    else {
      try {
        await db.query(emp.deleteById, [id]);
        res.suc = "Employee #" + id + dbSuc;
        return `Employee #${id} was deleted successfully`;
      } catch (err) {
        res.err = errHandler(err);
      }
    }
  } catch (err) {
    res.err = errHandler(err);
  }
  return res;
};

// Position async function takes one empployee object and updates the DB
del.pos = async id => {
  try {
    const resultArr = await db.query("SELECT COUNT(*) AS count FROM pos WHERE pos_id = ?", [id]);
    if (resultArr[0].count === 0) {
      return `Position #${id} doesn't exist in database`;
    } else {
      try {
        await db.query("UPDATE pos SET is_deleted = true WHERE pos_id = ?", [id]);
        return `Position #${id} was deleted successfully`;
      } catch (err) {
        console.error(err.code);
        return `Position #${id} could not be Deleted: DB Error`;
      }
    }
  } catch (err) {
    console.error(err.code);
    return `Position #${id} could not be Deleted: DB Error`;
  }
};

del.sub = async id => {
  try {
    const resultArr = await db.query("SELECT COUNT(*) AS count FROM sub WHERE sub_id = ?", [id]);
    if (resultArr[0].count === 0) {
      return `Subsidiary #${id} doesn't exist in database`;
    } else {
      try {
        await db.query("UPDATE sub SET is_deleted = true WHERE sub_id = ?", [id]);
        return `Subsidiary #${id} was deleted successfully`;
      } catch (err) {
        console.error(err.code);
        return `Subsidiary #${id} could not be Deleted: DB Error`;
      }
    }
  } catch (err) {
    console.error(err.code);
    return `Subsidiary #${id} could not be Deleted: DB Error`;
  }
};

module.exports = del;
