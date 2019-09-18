const db = require("../db/mysql");

const post = {};

// Employee async function takes empployee "emp" object and returns a response "res" object with "err" and "suc" containers
post.emp = async emp => {
  const res = {};
  try {
    await db.query("INSERT INTO employee SET ?", [emp]);
    res.suc = `${emp.firstname} ${emp.lastname} 
      has successfully been added to the Database`;
    return res;
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
    await db.query("INSERT INTO pos (shorthand, title) VALUES (?, ?)", [
      pos.shorthand,
      pos.title
    ]);
    res.suc = `"${pos.title}" has successfully been added to the Database`;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DB ERROR";
    return res;
  }
};

// Subsidiary async function takes position "sub" object and returns a response "res" object with "err" and "suc" containers
post.sub = async sub => {
  const res = {};
  try {
    await db.query(
      "INSERT INTO sub (shorthand, location, title) VALUES (?, ?, ?)",
      [sub.shorthand, sub.location, sub.title]
    );
    res.suc = `"${sub.shorthand}" has successfully been added to the Database`;
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Your Request could not be completed: DB ERROR";
    return res;
  }
};

module.exports = post;
