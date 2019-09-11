const db = require("../db");

const get = {};

get.emp = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE is_deleted IS FALSE "
      );
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
    }
    return res;
  } else {
    try {
      res.data = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE emp_id = ? AND is_deleted IS FALSE",
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
      "SELECT emp_id, firstname, lastname FROM employee WHERE firstname LIKE ? AND is_deleted IS FALSE OR lastname LIKE ? AND is_deleted IS FALSE",
      [query, query]
    );
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DATABASE ERROR";
  }
  return res;
};

module.exports = get;
