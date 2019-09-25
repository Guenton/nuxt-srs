const db = require("../db/mysql");
// prepare object for export
const get = {};

// push standard error response to variable
const dbErr = "Your Request could not be completed: DATABASE ERROR";
const searchErr = "Active Search could not be completed: DATABASE ERROR";

// ///////////////////////
// Employee Requests ////
// /////////////////////

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
      console.error(err.code);
      res.err = dbErr;
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
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// ///////////////////////
// Position Requests ////
// /////////////////////

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
      console.error(err.code);
      res.err = dbErr;
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
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// //////////////////////
// Service Requests ////
// ////////////////////

// Service async function that returns id specific if given or all services types with their archtype if no id was given
get.service = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(
        "SELECT service_type.type_id, service_type.title, service_archtype.archtype FROM service_type INNER JOIN service_archtype ON service_type.arch_id = service_archtype.arch_id;"
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT service_type.type_id, service_type.title, service_archtype.archtype FROM service_type INNER JOIN service_archtype ON service_type.arch_id = service_archtype.arch_id WHERE service_type.type_id = ?",
        [id]
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};
// Returns service type_id, title and matching archtype from given arch_id
get.serviceByArch = async archId => {
  const res = {};
  try {
    res.data = await db.query(
      "SELECT service_type.type_id, service_type.title, service_archtype.archtype FROM service_type INNER JOIN service_archtype ON service_type.arch_id = service_archtype.arch_id WHERE service_type.arch_id = ?",
      [archId]
    );
    return res;
  } catch (err) {
    console.error(err.code);
    res.err = dbErr;
    return res;
  }
};
// Returns service Archtype if arch_id is given, else returns all service Archtypes
get.serviceArchtype = async archId => {
  const res = {};
  if (!archId) {
    try {
      res.data = await db.query("SELECT * FROM service_archtype");
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT * FROM service_archtype WHERE arch_id = ?",
        [archId]
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// Returns Department Scope if depscope_id is given else returns all Department Scopes
get.serviceDepScope = async depScopeId => {
  const res = {};
  if (!depScopeId) {
    try {
      res.data = await db.query("SELECT * FROM dep_scope");
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT * FROM dep_scope WHERE depscope_id = ?",
        [depScopeId]
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// Returns Super Scope if superscope_id is given else returns all Super Scopes
get.serviceSuperScope = async superScopeId => {
  const res = {};
  if (!superScopeId) {
    try {
      res.data = await db.query("SELECT * FROM super_scope");
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT * FROM super_scope WHERE superscope_id = ?",
        [superScopeId]
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// /////////////////////////
// Subsidiary Requests ////
// ///////////////////////

// Subsidiary async function that returns id specific if given or all subsidiaries if no id was given
get.sub = async subId => {
  const res = {};
  if (!subId) {
    try {
      res.data = await db.query(
        "SELECT sub_id, shorthand, location, title FROM sub WHERE is_deleted IS FALSE"
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  } else {
    try {
      res.data = await db.query(
        "SELECT sub_id, shorthand, location, title FROM sub WHERE sub_id = ? AND is_deleted IS FALSE",
        [subId]
      );
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};

// /////////////////////////////////
// Normal Assignation Requests ////
// ///////////////////////////////

// Returns Normal Assignations on basis of the given pos_id
get.normAsByPos = async posId => {
  const res = {};
  try {
    const typeIdArr = await db.query(
      "SELECT type_id FROM normalas WHERE pos_id = ?",
      [posId]
    );
    const mapping = typeIdArr.map(async row => {
      const results = await get.service(row.type_id);
      return results;
    });
    const packet = await Promise.all(mapping);
    res.data = [];
    packet.forEach(item => {
      res.data.push(item.data[0]);
    });
    return res;
  } catch (err) {
    console.error(err.code);
    res.err = dbErr;
    return res;
  }
};

// //////////////////////////
// Search Query Handlers ///
// ////////////////////////

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
    console.error(err.code);
    res.err = searchErr;
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
    console.error(err.code);
    res.err = searchErr;
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
    console.error(err.code);
    res.err = searchErr;
    return res;
  }
};

module.exports = get;
