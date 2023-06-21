const mysql = require("mysql2/promise.js");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "restaurant",
});

module.exports = pool;