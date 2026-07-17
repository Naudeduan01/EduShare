const { z } = require("zod");
const categoriaSchema = z.object({
    nome: z
        .string()
        .min(2, "Nome da categoria muito curto")
        .max(50, "Nome da categoria muito longo")
});
module.exports = categoriaSchema;