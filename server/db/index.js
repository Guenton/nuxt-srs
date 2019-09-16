// Bring in both Databases
const dbmy = require("./mysql");
const dbms = require("./mssql");

// Prepare export containers
const mysql = {};
const mssql = {};

mysql.newEmp = emp => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbmy.query("INSERT INTO employee SET ?", [emp]);
      resolve(
        `${emp.firstname} ${
          emp.lastname
        } has successfully been added to the Database`
      );
    } catch (err) {
      console.error(err.code);
      reject(err);
    }
  });
};

mssql.newEmp = emp => {
  return new Promise(async (resolve, reject) => {
    const pool = await dbms;
    try {
      const request = pool.request();
      request.query(
        `INSERT INTO employee (firstname, lastname) VALUES 
          ${emp.firstname}, ${emp.lastname}`
      );
      resolve(
        `${emp.firstname} ${
          emp.lastname
        } has successfully been added to the Database`
      );
    } catch (err) {
      console.error(err.code);
      reject(err);
    }
  });
};

module.exports = { mysql, mssql };
