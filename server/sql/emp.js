const emp = {};

// ///////////////////
// Post Requests ////
// /////////////////
emp.lastIdArray = "SELECT LAST_INSERT_ID()";
emp.postMain = "INSERT INTO emp_main (posmain_id, scopesub_id) VALUES (?, ?)";
emp.postName =
  "INSERT INTO emp_name (empmain_id, firstname, middlename, lastname) VALUES (?, ?, ?, ?)";
emp.postAddr = "INSERT INTO emp_addr (empmain_id, addr, hood) VALUES (?, ?, ?)";
emp.postEmail = "INSERT INTO emp_email (empmain_id, email) VALUES (?, ?)";
emp.postDob = "INSERT INTO emp_dob (empmain_id, dob) VALUES (?, ?)";
emp.postIdent = "INSERT INTO emp_ident (empmain_id, passport, ident) VALUES (?, ?, ?)";

// //////////////////
// Get Requests ////
// ////////////////
emp.getMain = "SELECT empmain_id, posmain_id, scopesub_id FROM emp_main WHERE is_deleted = false";
emp.getMainX = "SELECT * FROM emp_main";

const empMainJoinSelectId = "SELECT emp.empmain_id";
const empMainJoinSelectName = ", nam.firstname, nam.middlename, nam.lastname";
const empMainJoinSelectPos = ", emp.posmain_id, pos.title AS position";
const empMainJoinSelectSub = ", emp.scopesub_id, sub.shorthand AS subsidiary";
const empMainJoinSelectX = ", emp.is_deleted, emp.created_at, emp.updated_at";
const empMainJoinFrom = " FROM (((emp_main emp";
const empMainJoin1 = " INNER JOIN pos_main pos ON emp.posmain_id = pos.posmain_id)";
const empMainJoin2 = " INNER JOIN scope_sub sub ON emp.scopesub_id = sub.scopesub_id)";
const empMainJoin3 = " INNER JOIN emp_name nam ON emp.empmain_id = nam.empmain_id)";
const empMainJoinWhere = " WHERE emp.is_deleted = false";
const empMainJoinSearchName =
  " WHERE nam.firstname LIKE ? AND emp.is_deleted IS FALSE OR nam.lastname LIKE ? AND emp.is_deleted IS FALSE";

emp.getMainJoin = empMainJoinSelectId.concat(
  empMainJoinSelectName,
  empMainJoinSelectPos,
  empMainJoinSelectSub,
  empMainJoinFrom,
  empMainJoin1,
  empMainJoin2,
  empMainJoin3,
  empMainJoinWhere
);
emp.getMainJoinX = empMainJoinSelectId.concat(
  empMainJoinSelectName,
  empMainJoinSelectPos,
  empMainJoinSelectSub,
  empMainJoinSelectX,
  empMainJoinFrom,
  empMainJoin1,
  empMainJoin2,
  empMainJoin3
);
emp.getMainJoinSearchName = empMainJoinSelectId.concat(
  empMainJoinSelectName,
  empMainJoinSelectPos,
  empMainJoinSelectSub,
  empMainJoinFrom,
  empMainJoin1,
  empMainJoin2,
  empMainJoin3,
  empMainJoinSearchName
);

emp.getName = "SELECT empmain_id, firstname, middlename, lastname FROM emp_name";
emp.getNameX = "SELECT * FROM emp_name";

emp.getEmail = "SELECT empmain_id, email FROM emp_email";
emp.getEmailX = "SELECT * FROM emp_email";

module.exports = emp;
