const serv = {};

// ///////////////////
// Post Requests ////
// /////////////////

serv.postMain = "INSERT INTO serv_main (described) VALUES (?)";
const postScopeArr = [
  "INSERT INTO serv_scope",
  "(servmain_id, servarch_id, servtype_id, scopedept_id, scopelocat_id)",
  "VALUES (?, ?, ?, ?, ?)"
];
serv.postScope = postScopeArr.join(" ");
const postRegArr = [
  "INSERT INTO serv_reg",
  "(servmain_id, footprint, cm_year, cm_seq)",
  "VALUES (?, ?, ?, ?)"
];
serv.postReg = postRegArr.join(" ");

// //////////////////
// Get Requests ////
// ////////////////

// Get Serv Main ////
serv.getMainSm = "SELECT servmain_id, described FROM serv_main WHERE is_deleted = false";
serv.getMainSmById = serv.getMainSm + " AND servmain_id = ?";
const getMainDateTimeArr = [
  "SELECT servmain_id, described,",
  "DATE_FORMAT(created_at,'%W, %M %D, %Y') AS date_in,",
  "TIME_FORMAT(created_at, '%r') AS time_in",
  "FROM serv_main WHERE is_deleted = false"
];
serv.getMainMd = getMainDateTimeArr.join(" ");
serv.getMainMdById = serv.getMainMd + " AND servmain_id = ?";
serv.getMainLg = "SELECT * FROM serv_main";
serv.getMainLgById = serv.getMainLg + " WHERE servmain_id = ?";

// Get Serv Arch ////
serv.getArchSm = "SELECT servarch_id, shorthand FROM serv_arch";
serv.getArchSmById = serv.getArchSm + " WHERE servarch_id = ?";
serv.getArchMd = "SELECT servarch_id, title FROM serv_arch";
serv.getArchMdById = serv.getArchMd + " WHERE servarch_id = ?";
serv.getArchLg = "SELECT * FROM serv_arch";
serv.getArchLgById = serv.getArchLg + " WHERE servarch_id = ?";

// Get Serv Type ////
serv.getTypeSm = "SELECT servtype_id, title FROM serv_type";
serv.getTypeSmById = serv.getTypeSm + " WHERE servtype_id = ?";
serv.getTypeSmByArchId = serv.getTypeSm + " WHERE servarch_id = ?";
serv.getTypeMd = "SELECT servtype_id, title, servarch_id FROM serv_type";
serv.getTypeMdById = serv.getTypeMd + " WHERE servtype_id = ?";
serv.getTypeMdByArchId = serv.getTypeMd + " WHERE servarch_id = ?";
const getTypeLgArr = [
  "SELECT typ.servtype_id, typ.title, typ.servarch_id, arc.title AS arctitle",
  "FROM (serv_type typ",
  "INNER JOIN serv_arch arc ON typ.servarch_id = arc.servarch_id)"
];
serv.getTypeLg = getTypeLgArr.join(" ");
serv.getTypeLgById = serv.getTypeLg + " WHERE typ.servtype_id = ?";
serv.getTypeLgByArchId = serv.getTypeLg + " WHERE typ.servarch_id = ?";

// ////////////////////
// Get Statistics ////
// //////////////////
// All timeframe queries require YYYY-mm-dd HH:ii:ss strings passed to them ////
const getLogCountFrameArr = [
  "SELECT COUNT(*) AS ttl",
  "FROM (serv_main ser",
  "INNER JOIN serv_scope sco ON ser.servmain_id = sco.servmain_id)",
  "WHERE ser.created_at >= ?",
  "AND ser.created_at < ?"
];
// Count All Logs in DB ////
serv.getLogCountAll = "SELECT COUNT(*) AS ttl FROM serv_main";
// Count All Logs in DB For a specific timeframe ////
serv.getLogCountFrame = getLogCountFrameArr.join(" ");
// Count All Logs in DB For a specific timeframe and specific Id ////
serv.getLogCountFrameArchById = serv.getLogCountFrame + " AND sco.servarch_id = ?";
serv.getLogCountFrameTypeById = serv.getLogCountFrame + " AND sco.servtype_id = ?";
serv.getLogCountFrameDeptById = serv.getLogCountFrame + " AND sco.scopedept_id = ?";
serv.getLogCountFrameLocatById = serv.getLogCountFrame + " AND sco.scopelocat_id = ?";

const getLogCountFrameArchArr = [
  "SELECT",
  "COUNT( IF(sco.servarch_id = 1, 1, null) ) AS 'Security Leadership',",
  "COUNT( IF(sco.servarch_id = 2, 1, null) ) AS 'Investigations',",
  "COUNT( IF(sco.servarch_id = 3, 1, null) ) AS 'Security Equipment',",
  "COUNT( IF(sco.servarch_id = 4, 1, null) ) AS 'Asset Protection',",
  "COUNT( IF(sco.servarch_id = 5, 1, null) ) AS 'Executive Protection'",
  "FROM (serv_main ser",
  "INNER JOIN serv_scope sco ON ser.servmain_id = sco.servmain_id)",
  "WHERE ser.created_at >= ?",
  "AND ser.created_at < ?"
];
const getLogCountFrameTypeArr = [
  "SELECT",
  "COUNT( IF(sco.servtype_id = 1, 1, null) ) AS 'Management',",
  "COUNT( IF(sco.servtype_id = 2, 1, null) ) AS 'Supervision',",
  "COUNT( IF(sco.servtype_id = 3, 1, null) ) AS 'General Investigations',",
  "COUNT( IF(sco.servtype_id = 4, 1, null) ) AS 'Electronic Investigations',",
  "COUNT( IF(sco.servtype_id = 5, 1, null) ) AS 'Screening',",
  "COUNT( IF(sco.servtype_id = 6, 1, null) ) AS 'Equipment Purchasing',",
  "COUNT( IF(sco.servtype_id = 7, 1, null) ) AS 'Equipment Installation',",
  "COUNT( IF(sco.servtype_id = 8, 1, null) ) AS 'Access Granting',",
  "COUNT( IF(sco.servtype_id = 9, 1, null) ) AS 'Access Registration',",
  "COUNT( IF(sco.servtype_id = 10, 1, null) ) AS 'Roving',",
  "COUNT( IF(sco.servtype_id = 11, 1, null) ) AS 'Guarding',",
  "COUNT( IF(sco.servtype_id = 12, 1, null) ) AS 'Patrolling',",
  "COUNT( IF(sco.servtype_id = 13, 1, null) ) AS 'Domicile Protection',",
  "COUNT( IF(sco.servtype_id = 14, 1, null) ) AS 'Transportation',",
  "COUNT( IF(sco.servtype_id = 15, 1, null) ) AS 'Shadowing'",
  "FROM (serv_main ser",
  "INNER JOIN serv_scope sco ON ser.servmain_id = sco.servmain_id)",
  "WHERE ser.created_at >= ?",
  "AND ser.created_at < ?"
];
const getLogCountFrameDeptArr = [
  "SELECT",
  "COUNT( IF(sco.scopedept_id = 1, 1, null) ) AS 'Within S&I',",
  "COUNT( IF(sco.scopedept_id = 2, 1, null) ) AS 'Other Department',",
  "COUNT( IF(sco.scopedept_id = 3, 1, null) ) AS 'Outside Bank'",
  "FROM (serv_main ser",
  "INNER JOIN serv_scope sco ON ser.servmain_id = sco.servmain_id)",
  "WHERE ser.created_at >= ?",
  "AND ser.created_at < ?"
];
const getLogCountFrameLocatArr = [
  "SELECT",
  "COUNT( IF(sco.scopelocat_id = 1, 1, null) ) AS 'Local',",
  "COUNT( IF(sco.scopelocat_id = 2, 1, null) ) AS 'Inter-Island',",
  "COUNT( IF(sco.scopelocat_id = 3, 1, null) ) AS 'International'",
  "FROM (serv_main ser",
  "INNER JOIN serv_scope sco ON ser.servmain_id = sco.servmain_id)",
  "WHERE ser.created_at >= ?",
  "AND ser.created_at < ?"
];
// Count All Logs in DB For a specific timeframe and group my requested type ////
serv.getLogCountFrameArch = getLogCountFrameArchArr.join(" ");
serv.getLogCountFrameType = getLogCountFrameTypeArr.join(" ");
serv.getLogCountFrameDept = getLogCountFrameDeptArr.join(" ");
serv.getLogCountFrameLocat = getLogCountFrameLocatArr.join(" ");

module.exports = serv;
