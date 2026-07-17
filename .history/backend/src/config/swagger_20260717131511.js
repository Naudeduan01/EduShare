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
            schemas: {
                Usuario: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1
                    },
                    nome: {
                        type: "string",
                        example: "João Silva"
                    },
                    email: {
                        type: "string",
                        example: "joao@email.com"
                    },
                    idade: {
                        type: "integer",
                        example: 25
                    }
                }
            }
        }
    }
    },
    apis: [
        "./src/routes/*.js"
    ]
};
module.exports = swaggerJsdoc(options);