// import db
const db = require("../db/mysql");
// import query string objects
const emp = require("../sql/emp");
const pos = require("../sql/pos");
const scope = require("../sql/scope");
const serv = require("../sql/serv");
// prepare object for export
const get = {};

// standard error response variables
const dbErr = "Your Request could not be completed: DATABASE ERROR";
const searchErr = "Active Search could not be completed: DATABASE ERROR";
// standard error handler function
const errHandler = err => {
  console.error(err);
  return dbErr;
};

// ///////////////////////
// Employee Requests ////
// /////////////////////
get.empSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(emp.getMain);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(emp.getMain + " AND empmain_id = ?", [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.empMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(emp.getAll);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(emp.getAllById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.empLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(emp.getAllX);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(emp.getAllXById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};

// ///////////////////////
// Position Requests ////
// /////////////////////
get.posSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getMainSm);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getMainSmById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.posMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getMainMd);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getMainMdById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.posLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getMainLg);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getMainLgById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Position Assignment Requests ////
get.posAssigSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getAssigSm);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getAssigSmById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.posAssigMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getAssigMd);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getAssigMdById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.posAssigLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(pos.getAssigLg);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(pos.getAssigLgById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};

// /////////////////////////
// Subsidiary Requests ////
// ///////////////////////
get.scopeSubSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(scope.getSubSm);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(scope.getSubSmById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.scopeSubMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(scope.getSubMd);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(scope.getSubMdById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.scopeSubLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(scope.getSubLg);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(scope.getSubLgById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};

// //////////////////////
// Service Requests ////
// ////////////////////
get.servSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getMainSm);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getMainSmById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.servMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getMainMd);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getMainMdById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.servLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getMainLg);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getMainLgById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Service Type Requests ////
get.servTypeSmData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getTypeSm);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getTypeSmById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.servTypeMdData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getTypeMd);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getTypeMdById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
get.servTypeLgData = async id => {
  const res = {};
  if (!id) {
    try {
      res.data = await db.query(serv.getTypeLg);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(serv.getTypeLgById, [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};

// ///////////////////////////
// Search Query Handlers ////
// /////////////////////////
get.empSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(emp.getAllSearchName, [query, query]);
  } catch (err) {
    res.err = errHandler(err);
  }
  return res;
};
get.posSearch = async query => {
  const res = {};
  query = "%" + query.toString() + "%";
  try {
    res.data = await db.query(pos.getAllSearchMain, [query, query]);
  } catch (err) {
    res.err = errHandler(err);
  }
  return res;
};

// //////////////////////
// Finance Requests ////
// ////////////////////
// Get cost Types from Database
get.costType = async id => {
  const res = {};
  const ctQuery = "SELECT costtype_id, title FROM cost_type WHERE is_deleted = false";
  if (!id) {
    try {
      res.data = await db.query(ctQuery);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(ctQuery + " AND costtype_id = ?", [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Get Currency Types from Database
get.costCurrency = async id => {
  const res = {};
  const ccQuery = "SELECT currency_id, iso, title FROM cost_currency WHERE is_deleted = false";
  if (!id) {
    try {
      res.data = await db.query(ccQuery);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(ccQuery + " AND currency_id = ?", [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Get List of Signature Right Holders with their respective limits
get.costSignature = async id => {
  const res = {};
  const csQuery =
    "SELECT costsig_id, title, sig_limit FROM cost_signature WHERE is_deleted = false";
  if (!id) {
    try {
      res.data = await db.query(csQuery);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(csQuery + " AND costsig_id = ?", [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
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
      res.data = await db.query("SELECT * FROM service_archtype WHERE arch_id = ?", [archId]);
      return res;
    } catch (err) {
      console.error(err.code);
      res.err = dbErr;
      return res;
    }
  }
};
// Get All SID Pre-registration data
get.servicePreData = async sid => {
  const res = {};
  // Set Queries
  const ts = {};
  ts.SELECT = "SELECT ts.serv_id, arc.archtype, typ.title AS typ, dep.depscope, ss.superscope";
  ts.FROM = " FROM ((((serv_typescope ts";
  ts.JOIN1 = " INNER JOIN service_archtype arc ON ts.arch_id = arc.arch_id)";
  ts.JOIN2 = " INNER JOIN service_type typ ON ts.type_id = typ.type_id)";
  ts.JOIN3 = " INNER JOIN dep_scope dep ON ts.depscope_id = dep.depscope_id)";
  ts.JOIN4 = " INNER JOIN super_scope ss ON ts.superscope_id = ss.superscope_id)";
  ts.WHERE = " WHERE ts.is_deleted = false";
  const tsQuery = ts.SELECT.concat(ts.FROM, ts.JOIN1, ts.JOIN2, ts.JOIN3, ts.JOIN4, ts.WHERE);
  const regQuery =
    "SELECT serv_id, footprint, cm_year, cm_seq FROM serv_reg WHERE is_deleted = false";
  // Database Calls
  if (!sid) {
    try {
      const servLog = await get.serviceLogData();
      res.serv = servLog.data;
      res.typeScope = await db.query(tsQuery);
      res.reg = await db.query(regQuery);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      const servLog = await get.serviceLogData(sid);
      res.serv = servLog.data;
      res.typeScope = await db.query(tsQuery + " AND serv_id = ?", [sid]);
      res.reg = await db.query(regQuery + " AND serv_id = ?", [sid]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Get SID Log Summary Data
get.serviceLogData = async id => {
  const res = {};
  const se = {};
  se.SELECT = "SELECT serv_id, described,";
  se.DATE = " DATE_FORMAT(created_at,'%W, %M %D, %Y') AS date_in,";
  se.TIME = " TIME_FORMAT(created_at, '%r') AS time_in";
  se.FROM = " FROM serv WHERE is_deleted = false";
  const sldQuery = se.SELECT.concat(se.DATE, se.TIME, se.FROM);
  if (!id) {
    try {
      res.data = await db.query(sldQuery);
    } catch (err) {
      res.err = errHandler(err);
    }
  } else {
    try {
      res.data = await db.query(sldQuery + " AND serv_id = ?", [id]);
    } catch (err) {
      res.err = errHandler(err);
    }
  }
  return res;
};
// Get SID Log All Data
get.serviceAllData = id => {
  const res = {};
  return res;
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
      res.data = await db.query("SELECT * FROM dep_scope WHERE depscope_id = ?", [depScopeId]);
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
      res.data = await db.query("SELECT * FROM super_scope WHERE superscope_id = ?", [
        superScopeId
      ]);
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
    const typeIdArr = await db.query("SELECT type_id FROM normalas WHERE pos_id = ?", [posId]);
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
// Footprint async function that searches in log table
get.footprintSearch = async query => {
  const res = {};
  query = query.toString() + "%";
  try {
    res.data = await db.query("Pending Query", [query]);
    return res;
  } catch (err) {
    console.error(err.code);
    res.err = searchErr;
    return res;
  }
};

module.exports = get;
