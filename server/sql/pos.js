const pos = {};

// Get Main Small
pos.getMainSm = "SELECT posmain_id, shorthand FROM pos_main WHERE is_deleted = false";
pos.getMainSmById = pos.getMainSm + " AND posmain_id = ?";
// Get Main Medium
pos.getMainMd = "SELECT posmain_id, shorthand, title FROM pos_main WHERE is_deleted = false";
pos.getMainMdById = pos.getMainMd + " AND posmain_id = ?";
// Get Main Large
pos.getMainLg = "SELECT * FROM pos_main";
pos.getMainLgById = this.getMainLg + " WHERE posmain_id = ?";

// Get Assignments Small
const getAssigSmArr = [
  "SELECT ass.posmain_id, pos.shorthand, ass.servtype_id, typ.title",
  "FROM ((pos_assig ass",
  "INNER JOIN pos_main pos ON ass.posmain_id = pos.posmain_id)",
  "INNER JOIN serv_type typ ON ass.servtype_id = typ.servtype_id)"
];
pos.getAssigSm = getAssigSmArr.join(" ");
pos.getAssigSmById = pos.getAssigSm + " WHERE ass.posmain_id = ?";
// Get Assignments Medium
const getAssigMdArr = [
  "SELECT ass.posmain_id,",
  "pos.shorthand, pos.title AS postitle,",
  "ass.servtype_id, typ.title",
  "FROM ((pos_assig ass",
  "INNER JOIN pos_main pos ON ass.posmain_id = pos.posmain_id)",
  "INNER JOIN serv_type typ ON ass.servtype_id = typ.servtype_id)"
];
pos.getAssigMd = getAssigMdArr.join(" ");
pos.getAssigMdById = pos.getAssigMd + " WHERE ass.posmain_id = ?";
// Get Assignments Large
const getAssigLgArr = [
  "SELECT ass.posmain_id,",
  "pos.shorthand, pos.title AS postitle,",
  "ass.servtype_id, typ.title,",
  "typ.servarch_id, arc.title AS arctitle",
  "FROM (((pos_assig ass",
  "INNER JOIN pos_main pos ON ass.posmain_id = pos.posmain_id)",
  "INNER JOIN serv_type typ ON ass.servtype_id = typ.servtype_id)",
  "INNER JOIN serv_arch arc ON typ.servarch_id = arc.servarch_id)"
];
pos.getAssigLg = getAssigLgArr.join(" ");
pos.getAssigLgById = pos.getAssigLg + " WHERE ass.posmain_id = ?";

// Search Main
pos.getAllSearchMain = pos.getMainMd + " AND (shorthand LIKE ? OR title LIKE ?)";

module.exports = pos;
