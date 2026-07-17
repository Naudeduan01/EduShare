function errorMiddleware(error, req, res, next) {
    console.error(error);
    res.status(500).json({
        mensagem: error.message || "Erro interno do servidor"
    });
}
module.exports = errorMiddleware;