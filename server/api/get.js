const db = require("../db");

const get = {};

get.emp = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee"
      );
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
    }
    return res;
  } else {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE emp_id = ?",
        [id]
      );
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
    }
    return res;
  }
};

get.empSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(
      "SELECT emp_id, firstname, lastname FROM employee WHERE firstname LIKE ? OR lastname LIKE ?",
      [query, query]
    );
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DATABASE ERROR";
  }
  return res;
};

module.exports = get;
