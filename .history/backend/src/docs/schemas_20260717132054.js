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
    Categoria: {
        type: "object",
        properties: {
            id: {
                type: "integer",
                example: 2
            },
            nome: {
                type: "string",
                example: "Física"
            }
        }
    },
    Arquivo: {
        type: "object",
        properties: {
            id: {
                type: "integer",
                example: 10
            },
            nome_original: {
                type: "string",
                example: "trabalho.pdf"
            },
            nome_arquivo: {
                type: "string",
                example: "1726151782.pdf"
            },
            caminho: {
                type: "string",
                example: "uploads/1726151782.pdf"
            },
            trabalho_id: {
                type: "integer",
                example: 5
            }
        }
    },
    LoginRequest: {
        type: "object",
        required: [
            "email",
            "senha"
        ],
        properties: {
            email: {
                type: "string",
                example: "joao@email.com"
            },
            senha: {
                type: "string",
                example: "123456"
            }
        }
    },
};
module.exports = schemas;