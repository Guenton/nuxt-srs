const scope = {};

// //////////////////
// Get Requests ////
// ////////////////
// Sub Small
scope.getSubSm = "SELECT scopesub_id, shorthand FROM scope_sub WHERE is_deleted = false";
scope.getSubSmById = scope.getSubSm + " AND scopesub_id = ?";
// Sub Medium
scope.getSubMd =
  "SELECT scopesub_id, shorthand, country, title FROM scope_sub WHERE is_deleted = false";
scope.getSubMdById = scope.getSubMd + " AND scopesub_id = ?";
// Sub Large
scope.getSubLg = "SELECT * FROM scope_sub";
scope.getSubLgById = scope.getSubLg + " WHERE scopesub_id = ?";

module.exports = scope;
