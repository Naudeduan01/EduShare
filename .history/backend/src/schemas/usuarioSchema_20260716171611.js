const { z } = require("zod");
const usuarioSchema = z.object({
    nome: z
        .string()
        .min(3, "Nome deve possuir pelo menos 3 caracteres"),
    email: z
        .string()
        .email("Email inválido"),
    senha: z
        .string()
        .min(6, "Senha deve possuir pelo menos 6 caracteres"),
    idade: z
        .number({
            invalid_type_error: "Idade deve ser um número"
        })
        .int("Idade deve ser um número inteiro")
        .positive("Idade deve ser positiva")
});
module.exports = usuarioSchema;