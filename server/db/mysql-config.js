// MySql DB Configuration Object
const mysqlConfig = {
  host: "localhost",
  user: "Nuxt_User",
  password: "$NuxtPass",
  database: "nuxt_srs",
  port: 3306,
  connectionLimit: 10
};

module.exports = mysqlConfig;
