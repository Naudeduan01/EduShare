function errorMiddleware(error, req, res, next) {
    console.error(error);
    const status = error.status || 500;
    res.status(status).json({
        mensagem:
            error.message || "Erro interno do servidor"
    });
}
module.exports = errorMiddleware;