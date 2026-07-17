const trabalhoRepository = require("../repositories/trabalhoRepository");
async function listarTrabalhos(){
    return await trabalhoRepository.listarTrabalhos();
}
async function criarTrabalho(trabalho) {
    return await trabalhoRepository.criarTrabalho(trabalho);
}
async function buscarTrabalhoPorId(id) {
    return await trabalhoRepository.buscarTrabalhoPorId(id);
}
async function atualizarTrabalho(id, trabalho) {
    return await trabalhoRepository.atualizarTrabalho(id, trabalho);
}
async function excluirTrabalho(id) {
    return await trabalhoRepository.excluirTrabalho(id);
}
module.exports = {
    listarTrabalhos,
    criarTrabalho,
    buscarTrabalhoPorId,
    atualizarTrabalho,
    excluirTrabalho
};