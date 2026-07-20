require("../tracing");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/database");

const userRoutes = require("./routes/userRoutes");
const trabalhoRoutes = require("./routes/trabalhoRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const arquivoRoutes = require("./routes/arquivoRoutes");
const authRoutes = require("./routes/authRoutes");

const errorMiddleware = require("./middlewares/errorMiddleware");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(uploadRoutes);
app.use(arquivoRoutes);
app.use(userRoutes);
app.use(trabalhoRoutes);
app.use(categoriaRoutes);
app.use(authRoutes);

app.use(errorMiddleware);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

module.exports = app;