const arquivoRepository = require("../repositories/arquivoRepository");
async function salvarArquivo(arquivo){
    return await arquivoRepository.salvarArquivo(arquivo);
}
async function listarArquivosPorTrabalho(trabalhoId){
    return await arquivoRepository.listarArquivosPorTrabalho(trabalhoId);
}
async function excluirArquivo(id){
    return await arquivoRepository.excluirArquivo(id);
}
async function buscarArquivoPorId(id){
    return await arquivoRepository.buscarArquivoPorId(id);
}
async function buscarArquivoComDono(id){
    return await arquivoRepository.buscarArquivoComDono(id);
}
module.exports = {
    salvarArquivo,
    listarArquivosPorTrabalho,
    excluirArquivo,
    buscarArquivoPorId,
    buscarArquivoComDono
};