const scope = {};

// //////////////////
// Get Requests ////
// ////////////////

// Get Scope Dept ////
scope.getDept = "SELECT * FROM scope_dept";
scope.getDeptById = scope.getDept + " WHERE scopedept_id = ?";

// Get Scope Locat ////
scope.getLocat = "SELECT * FROM scope_locat";
scope.getLocatById = scope.getLocat + " WHERE scopelocat_id = ?";

// Get Scope Sub ////
scope.getSubSm = "SELECT scopesub_id, shorthand FROM scope_sub WHERE is_deleted = false";
scope.getSubSmById = scope.getSubSm + " AND scopesub_id = ?";
scope.getSubMd =
  "SELECT scopesub_id, shorthand, country, title FROM scope_sub WHERE is_deleted = false";
scope.getSubMdById = scope.getSubMd + " AND scopesub_id = ?";
scope.getSubLg = "SELECT * FROM scope_sub";
scope.getSubLgById = scope.getSubLg + " WHERE scopesub_id = ?";

module.exports = scope;
