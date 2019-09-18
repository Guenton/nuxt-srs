const db = require("../db/mysql");

// prepare put module for export
const del = {};

// Employee async function takes one empployee object and updates the DB
del.emp = async id => {
  try {
    const resultArr = await db.query(
      "SELECT COUNT(*) AS count FROM employee WHERE emp_id = ?",
      [id]
    );
    if (resultArr[0].count === 0) {
      return `Employee #${id} doesn't exist in database`;
    } else {
      try {
        await db.query(
          "UPDATE employee SET is_deleted = true WHERE emp_id = ?",
          [id]
        );
        return `Employee #${id} was deleted successfully`;
      } catch (err) {
        console.error(err.code);
        return `Employee #${id} could not be Deleted: DB Error`;
      }
    }
  } catch (err) {
    console.error(err.code);
    return `Employee #${id} could not be Deleted: DB Error`;
  }
};

// Position async function takes one empployee object and updates the DB
del.pos = async id => {
  try {
    const resultArr = await db.query(
      "SELECT COUNT(*) AS count FROM pos WHERE pos_id = ?",
      [id]
    );
    if (resultArr[0].count === 0) {
      return `Position #${id} doesn't exist in database`;
    } else {
      try {
        await db.query("UPDATE pos SET is_deleted = true WHERE pos_id = ?", [
          id
        ]);
        return `Position #${id} was deleted successfully`;
      } catch (err) {
        console.error(err.code);
        return `Position #${id} could not be Deleted: DB Error`;
      }
    }
  } catch (err) {
    console.error(err.code);
    return `Position #${id} could not be Deleted: DB Error`;
  }
};

del.sub = async id => {
  try {
    const resultArr = await db.query(
      "SELECT COUNT(*) AS count FROM sub WHERE sub_id = ?",
      [id]
    );
    if (resultArr[0].count === 0) {
      return `Subsidiary #${id} doesn't exist in database`;
    } else {
      try {
        await db.query("UPDATE sub SET is_deleted = true WHERE sub_id = ?", [
          id
        ]);
        return `Subsidiary #${id} was deleted successfully`;
      } catch (err) {
        console.error(err.code);
        return `Subsidiary #${id} could not be Deleted: DB Error`;
      }
    }
  } catch (err) {
    console.error(err.code);
    return `Subsidiary #${id} could not be Deleted: DB Error`;
  }
};

module.exports = del;
