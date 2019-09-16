const db = require("../db/mysql");

const post = {};

// Employee async function takes empployee "emp" object and returns a response "res" object with "err" and "suc" containers
post.emp = async emp => {
  const res = {};
  try {
    await db.query("INSERT INTO employee SET ?", [emp]);
    return `${emp.firstname} ${emp.lastname} 
      has successfully been added to the Database`;
  } catch (err) {
    console.error(err.code);
    res.err = "Your Request could not be completed: DB ERROR";
    return res;
  }
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
    res.err = "Your Request could not be completed: DB ERROR";
    return res;
  }
};

module.exports = post;
