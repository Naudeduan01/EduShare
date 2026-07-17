const trabalhoRepository = require("../repositories/trabalhoRepository");
async function listarTrabalhos(){
    return await trabalhoRepository.listarTrabalhos();
}
async function criarTrabalho(trabalho) {
    return await trabalhoRepository.criarTrabalho(trabalho);
}
module.exports = {
    listarTrabalhos,
    criarTrabalho
};