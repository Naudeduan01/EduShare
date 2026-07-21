const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on("connect", (client) => {
    client.query("SET search_path TO edushare");

    client.query("SELECT current_database(), current_schema()", (err, result) => {
        console.log("Banco conectado:", result.rows);
    });
});

module.exports = pool;