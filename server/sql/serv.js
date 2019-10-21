const serv = {};

// //////////////////
// Get Requests ////
// ////////////////
serv.getMain = "SELECT servmain_id, described FROM serv_main WHERE is_deleted = false";
serv.getMainX = "SELECT * FROM serv_main";

const getMainSelect = "SELECT servmain_id, described";
const getMainDate = ", DATE_FORMAT(created_at,'%W, %M %D, %Y') AS date_in";
const getMainTime = ", TIME_FORMAT(created_at, '%r') AS time_in";
const getMainFrom = " FROM serv_main WHERE is_deleted = false";

serv.getMainDateTime = getMainSelect.concat(getMainDate, getMainTime, getMainFrom);

module.exports = serv;
