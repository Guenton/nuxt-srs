const scope = {};

scope.subS = "SELECT scopesub_id, shorthand FROM scope_sub WHERE is_deleted = false";
scope.subM =
  "SELECT scopesub_id, shorthand, country, title FROM scope_sub WHERE is_deleted = false";
scope.subX = "SELECT * FROM scope_sub";

module.exports = scope;
