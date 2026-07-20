require("./tracing");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");
const trabalhoRoutes = require("./src/routes/trabalhoRoutes");
const categoriaRoutes = require("./src/routes/categoriaRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const uploadRoutes = require("./src/routes/uploadRoutes");
const arquivoRoutes = require("./src/routes/arquivoRoutes");
const authRoutes = require("./src/routes/authRoutes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
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
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});