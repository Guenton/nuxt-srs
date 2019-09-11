const db = require("../db");

const post = {};

// Employee async function takes empployee "emp" object and returns a response "res" object with "err" and "suc" containers
post.emp = async emp => {
  const res = {};
  try {
    await db.query("INSERT INTO employee SET ?", [emp]);
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      res.err = "This employee already exists in the Database";
      return res;
    } else {
      console.log(err.code);
      res.err = "Your Request could not be completed: DATABASE ERROR";
      return res;
    }
  }
  res.suc = `${emp.firstname} 
  ${emp.lastname} has successfully been added to the Database`;
  return res;
};

// Position async function takes position "pos" object and returns a response "res" object with "err" and "suc" containers
post.pos = async pos => {
  const res = {};
  try {
    await db.query("INSERT INTO employee SET ?", [pos]);
    res.suc = `${pos.title} has successfully been added to the Database`;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DATABASE ERROR";
    return res;
  }
};

module.exports = post;
