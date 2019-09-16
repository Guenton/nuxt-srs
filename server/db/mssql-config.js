// MS SQL Server Configuration Object
const mssqlConfig = {
  server: "localhost",
  user: "Nuxt_User",
  password: "$NuxtPass",
  database: "nuxt_srs",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

module.exports = mssqlConfig;
