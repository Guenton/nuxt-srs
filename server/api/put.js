const db = require("../db/mysql");

// prepare put module for export
const put = {};

// emp async function takes one empployee object and updates the DB
put.emp = async emp => {
  try {
    await db.query(
      "UPDATE employee SET firstname = ?, lastname = ? WHERE emp_id = ?",
      [emp.firstname, emp.lastname, emp.emp_id]
    );
  } catch (err) {
    return `${emp.firstname} ${emp.lastname} could not be updated: DB Error`;
  }
  return `${emp.firstname} ${emp.lastname} was updated successfully`;
};

// severalEmp async function takes an employee object, maps it out and waits for emp results
put.severalEmp = async empArr => {
  const mapping = empArr.map(async emp => {
    const results = await put.emp(emp);
    return results;
  });
  const response = await Promise.all(mapping);
  return response;
};

module.exports = put;
