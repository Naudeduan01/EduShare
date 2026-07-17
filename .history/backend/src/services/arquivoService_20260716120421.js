const arquivoRepository = require("../repositories/arquivoRepository");
async function salvarArquivo(arquivo){
    return await arquivoRepository.salvarArquivo(arquivo);
}
async function listarArquivosPorTrabalho(trabalhoId){
    return await arquivoRepository.listarArquivosPorTrabalho(trabalhoID);
}
async function excluirArquivo(id){
    return await arquivoRepository.excluirArquivo(id);
}
async function buscarArquivoPorId(id) {
    return await arquivoRepository.buscarArquivoPorId(id);
}
module.exports = {
    salvarArquivo,
    listarArquivosPorTrabalho,
    excluirArquivo,
    buscarArquivoPorId
};