const { z } = require("zod");
const trabalhoSchema = z.object({
    titulo: z
        .string()
        .min(3, "O título deve possuir pelo menos 3 caracteres")
        .max(100, "O título deve possuir no máximo 100 caracteres"),
    descricao: z
        .string()
        .min(10, "A descrição deve possuir pelo menos 10 caracteres")
        .max(1000, "A descrição deve possuir no máximo 1000 caracteres"),
    categoria_id: z
        .number({
            invalid_type_error: "Categoria inválida"
        })
        .int("Categoria inválida")
        .positive("Categoria inválida")
        .optional()
});
module.exports = trabalhoSchema;