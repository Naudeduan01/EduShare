const { ZodError } = require("zod");
function errorMiddleware(error, req, res, next) {
    console.error(error);
    if (error instanceof ZodError) {
        return res.status(400).json({
            mensagem: "Dados inválidos",
            erros: error.issues.map(issue => ({
                campo: issue.path.join("."),
                mensagem: issue.message
            }))
        });
    }
    const status = error.status || 500;
    res.status(status).json({
        mensagem: error.message || "Erro interno do servidor"
    });
}
console.log("=== ERROR MIDDLEWARE ===");
console.log(error.constructor.name);
console.log(error);
module.exports = errorMiddleware;