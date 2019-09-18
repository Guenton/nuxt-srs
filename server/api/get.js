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

// Service async function that returns id specific if given or all employees if no id was given
get.service = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT service_type.type_id, service_type.title, service_archtype.archtype FROM service_type INNER JOIN service_archtype ON service_type.arch_id = service_archtype.arch_id;"
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
        "SELECT service_type.type_id, service_type.title, service_archtype.archtype FROM service_type INNER JOIN service_archtype ON service_type.arch_id = service_archtype.arch_id; WHERE service_type.type_id = ?",
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

// Subsidiary async function that returns id specific if given or all subsidiaries if no id was given
get.sub = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT sub_id, shorthand, location, title FROM sub WHERE is_deleted IS FALSE "
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
        "SELECT sub_id, shorthand, location, title FROM sub WHERE sub_id = ? AND is_deleted IS FALSE",
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

// Search Queries

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
    res.err = "Active Search could not be completed: DATABASE ERROR";
    return res;
  }
};

// Position async function that searches in pos table
get.posSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(
      "SELECT pos_id, shorthand, title FROM pos WHERE shorthand LIKE ? AND is_deleted IS FALSE OR title LIKE ? AND is_deleted IS FALSE",
      [query, query]
    );
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Active Search could not be completed: DATABASE ERROR";
    return res;
  }
};

// Subsidiary async function that searches in sub table
get.subSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(
      "SELECT sub_id, shorthand, location, title FROM sub WHERE shorthand LIKE ? AND is_deleted IS FALSE OR location LIKE ? AND is_deleted IS FALSE OR title LIKE ? AND is_deleted IS FALSE",
      [query, query, query]
    );
    return res;
  } catch (err) {
    console.log(err.code);
    res.err = "Active Search could not be completed: DATABASE ERROR";
    return res;
  }
};

module.exports = get;
