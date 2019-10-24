const emp = {};

// ///////////////////
// Post Requests ////
// /////////////////
emp.postMain = "INSERT INTO emp_main (posmain_id, scopesub_id) VALUES (?, ?)";
emp.postName =
  "INSERT INTO emp_name (empmain_id, firstname, middlename, lastname) VALUES (?, ?, ?, ?)";
emp.postAddr = "INSERT INTO emp_addr (empmain_id, addr, hood) VALUES (?, ?, ?)";
emp.postEmail = "INSERT INTO emp_email (empmain_id, email) VALUES (?, ?)";
emp.postDob = "INSERT INTO emp_dob (empmain_id, dob) VALUES (?, ?)";
emp.postIdent = "INSERT INTO emp_ident (empmain_id, passport, ident) VALUES (?, ?, ?)";

// //////////////////
// Put Requests ////
// ////////////////
emp.putMain = "UPDATE emp_main SET posmain_id = ?, scopesub_id = ? WHERE empmain_id = ?";
emp.putName =
  "UPDATE emp_name SET firstname = ?, middlename = ?, lastname = ? WHERE empmain_id = ?";
emp.putAddr = "UPDATE emp_addr SET addr = ?, hood = ? WHERE empmain_id = ?";
emp.putEmail = "UPDATE emp_email SET email = ? WHERE empmain_id = ?";
emp.putDob = "UPDATE emp_dob SET dob = ? WHERE empmain_id = ?";
emp.putIdent = "UPDATE emp_ident SET passport = ?, ident = ? WHERE empmain_id = ?";

// //////////////////
// Get Requests ////
// ////////////////
// Main Small
emp.getMain = "SELECT empmain_id, posmain_id, scopesub_id FROM emp_main WHERE is_deleted = false";
emp.getMainX = "SELECT * FROM emp_main";
// Main Medium
const empGetAllArr = [
  "SELECT emp.empmain_id,",
  "emp.posmain_id, pos.title AS position,",
  "emp.scopesub_id, sub.shorthand AS subsidiary,",
  "nam.firstname, nam.middlename, nam.lastname,",
  "addr.addr, addr.hood,",
  "mail.email, dob.dob,",
  "iden.passport, iden.ident",
  "FROM (((((((emp_main emp",
  "INNER JOIN pos_main pos ON emp.posmain_id = pos.posmain_id)",
  "INNER JOIN scope_sub sub ON emp.scopesub_id = sub.scopesub_id)",
  "INNER JOIN emp_name nam ON emp.empmain_id = nam.empmain_id)",
  "INNER JOIN emp_addr addr ON emp.empmain_id = addr.empmain_id)",
  "INNER JOIN emp_email mail ON emp.empmain_id = mail.empmain_id)",
  "INNER JOIN emp_dob dob ON emp.empmain_id = dob.empmain_id)",
  "INNER JOIN emp_ident iden ON emp.empmain_id = iden.empmain_id)",
  "WHERE emp.is_deleted = false"
];
emp.getAll = empGetAllArr.join(" ");
emp.getAllById = emp.getAll + " AND emp.empmain_id = ?";
// Main Large
const empGetAllXArr = [
  "SELECT emp.empmain_id,",
  "emp.is_deleted, emp.created_at, emp.updated_at,",
  "emp.posmain_id, pos.title AS position,",
  "emp.scopesub_id, sub.shorthand AS subsidiary,",
  "sub.title AS subname, sub.country AS subcountry,",
  "nam.firstname, nam.middlename, nam.lastname,",
  "addr.addr, addr.hood,",
  "mail.email, dob.dob,",
  "iden.passport, iden.ident",
  "FROM (((((((emp_main emp",
  "INNER JOIN pos_main pos ON emp.posmain_id = pos.posmain_id)",
  "INNER JOIN scope_sub sub ON emp.scopesub_id = sub.scopesub_id)",
  "INNER JOIN emp_name nam ON emp.empmain_id = nam.empmain_id)",
  "INNER JOIN emp_addr addr ON emp.empmain_id = addr.empmain_id)",
  "INNER JOIN emp_email mail ON emp.empmain_id = mail.empmain_id)",
  "INNER JOIN emp_dob dob ON emp.empmain_id = dob.empmain_id)",
  "INNER JOIN emp_ident iden ON emp.empmain_id = iden.empmain_id)"
];
emp.getAllX = empGetAllXArr.join(" ");
emp.getAllXById = emp.getAllX + " WHERE emp.empmain_id = ?";
// Main Search
emp.getAllSearchName = emp.getAll + " AND (nam.firstname LIKE ? OR nam.lastname LIKE ?)";

// All Names
emp.getName = "SELECT empmain_id, firstname, middlename, lastname FROM emp_name";
emp.getNameX = "SELECT * FROM emp_name";
// All Emails
emp.getEmail = "SELECT empmain_id, email FROM emp_email";
emp.getEmailX = "SELECT * FROM emp_email";

// Count
emp.count = "SELECT COUNT(*) AS count FROM emp_main";
emp.countById = "SELECT COUNT(*) AS count FROM emp_main WHERE empmain_id = ?";
// Delete
emp.deleteById = "UPDATE emp_main SET is_deleted = true WHERE empmain_id = ?";

module.exports = emp;
