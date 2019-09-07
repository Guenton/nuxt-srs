const db = require("../db");

const get = {};

get.emp = async id => {
  const res = {};
  if (!id) {
    try {
      res.emp = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee"
      );
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
    return res;
  } else {
    try {
      res.emp = await db.query(
        "SELECT emp_id, firstname, lastname FROM employee WHERE emp_id = ?",
        [id]
      );
    } catch (err) {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
    return res;
  }
};

module.exports = get;
