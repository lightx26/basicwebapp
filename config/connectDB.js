const mysql = require("mysql2/promise.js");

const pool = mysql.createPool({
    host: "netapi.studyit.dev",
    user: "fcare",
    password: "NguyetHung@1903",
    database: "foodcare",
});

module.exports = pool;