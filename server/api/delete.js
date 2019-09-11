const db = require("../db");

// prepare put module for export
const del = {};

// emp async function takes one empployee object and updates the DB
del.emp = async id => {
  try {
    const resultArr = await db.query(
      "SELECT COUNT(*) AS count FROM employee WHERE emp_id = ?",
      [id]
    );
    console.log(resultArr[0].count);
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

module.exports = del;
