const pos = {};

pos.getMainS = "SELECT posmain_id, shorthand FROM pos_main WHERE is_deleted = false";
pos.getMainM = "SELECT posmain_id, shorthand, title FROM pos_main WHERE is_deleted = false";
pos.getMainX = "SELECT * FROM posmain";

module.exports = pos;
