const serv = {};

// //////////////////
// Get Requests ////
// ////////////////
// Main Small
serv.getMainSm = "SELECT servmain_id, described FROM serv_main WHERE is_deleted = false";
serv.getMainSmById = serv.getMainSm + " AND servmain_id = ?";
// Main Medium
const getMainDateTimeArr = [
  "SELECT servmain_id, described,",
  "DATE_FORMAT(created_at,'%W, %M %D, %Y') AS date_in,",
  "TIME_FORMAT(created_at, '%r') AS time_in,",
  "FROM serv_main WHERE is_deleted = false"
];
serv.getMainMd = getMainDateTimeArr.join(" ");
serv.getMainMdById = serv.getMainMd + " AND servmain_id = ?";
// Main Large
serv.getMainLg = "SELECT * FROM serv_main";
serv.getMainLgById = serv.getMainLg + " WHERE servmain_id = ?";

// Type Small
serv.getTypeSm = "SELECT servtype_id, title FROM serv_type";
serv.getTypeSmById = serv.getTypeSm + " WHERE servtype_id = ?";
// Type Medium
serv.getTypeMd = "SELECT servtype_id, title, servarch_id FROM serv_type";
serv.getTypeMdById = serv.getTypeMd + " WHERE servtype_id = ?";
// Type Large
const getTypeLgArr = [
  "SELECT typ.servtype_id, typ.title, typ.servarch_id, arc.title AS arctitle",
  "FROM (serv_type typ",
  "INNER JOIN serv_arch arc ON typ.servarch_id = arc.servarch_id)"
];
serv.getTypeLg = getTypeLgArr.join(" ");
serv.getTypeLgById = serv.getTypeLg + " WHERE typ.servtype_id = ?";

module.exports = serv;
