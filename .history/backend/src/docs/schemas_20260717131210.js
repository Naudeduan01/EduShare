const schemas = {
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
};
module.exports = schemas;