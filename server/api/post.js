const db = require("../db");

const post = {};

// emp async function takes empployee "emp" object and returns a response "res" object
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

module.exports = post;
