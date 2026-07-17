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
    },
    Trabalho: {
        type: "object",
        properties: {
            id: {
                type: "integer",
                example: 1
            },
            titulo: {
                type: "string",
                example: "Leis de Newton"
            },
            descricao: {
                type: "string",
                example: "Trabalho de Física"
            },
            categoria_id: {
                type: "integer",
                example: 2
            },
            criador_id: {
                type: "integer",
                example: 4
            }
        }
    },
};
module.exports = schemas;