const trabalhoService = require("../services/trabalhoService");
async function listarTrabalhos(req, res, next){
    try {
        const trabalhos = await trabalhoService.listarTrabalhos();
        res.json(trabalhos);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    listarTrabalhos
};