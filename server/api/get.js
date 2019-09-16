const db = require("../db/mysql");

const get = {};

// Employee async function that returns id specific if given or all employees if no id was given
get.emp = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE is_deleted IS FALSE "
      );
      return res;
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE emp_id = ? AND is_deleted IS FALSE",
        [id]
      );
      return res;
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
  }
};

// Position async function that returns id specific if given or all positions if no id was given
get.pos = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT pos_id, shorthand, title FROM pos WHERE is_deleted IS FALSE "
      );
      return res;
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT pos_id, shorthand, title FROM pos WHERE pos_id = ? AND is_deleted IS FALSE",
        [id]
      );
      return res;
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
  }
};

// Employee async function that searches in employee table
get.empSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(
      "SELECT emp_id, firstname, lastname FROM employee WHERE firstname LIKE ? AND is_deleted IS FALSE OR lastname LIKE ? AND is_deleted IS FALSE",
      [query, query]
    );
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DATABASE ERROR";
    return res;
  }
};

module.exports = get;
