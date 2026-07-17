const { z } = require("zod");
const arquivoSchema = z.object({
    trabalho_id: z
        .number({
            invalid_type_error:
                "Trabalho inválido"
        })
        .int()
        .positive()
});
module.exports = arquivoSchema;