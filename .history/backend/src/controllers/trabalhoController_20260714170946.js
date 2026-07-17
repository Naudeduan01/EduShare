const trabalhoService = require("../services/trabalhoService");
async function listarTrabalhos(req, res, next){
    try {
        const trabalhos = await trabalhoService.listarTrabalhos();
        res.json(trabalhos);
    } catch (error) {
        next(error);
    }
}
async function criarTrabalho(req, res, next) {
    try {
        const novoTrabalho =
            await trabalhoService.criarTrabalho(req.body);
        res.status(201).json(novoTrabalho);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    listarTrabalhos,
    criarTrabalho
};