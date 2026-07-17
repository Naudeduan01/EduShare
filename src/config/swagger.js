const schemas = require("../docs/schemas");
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "EduShare API",
            version: "1.0.0",
            description: "API para compartilhamento de trabalhos acadêmicos"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            schemas,
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            },
        }
    },
    apis: [
        "./src/routes/*.js"
    ]
};
module.exports = swaggerJsdoc(options);