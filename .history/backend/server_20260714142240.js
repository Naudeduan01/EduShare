require("dotenv").config();
console.log(process.cwd());
console.log(process.env.DB_PASSWORD);
const express = require("express");
require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");
const app = express();
app.use(express.json());
app.use(userRoutes);
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});