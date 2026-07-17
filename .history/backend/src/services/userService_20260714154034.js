const userRepository = require("../repositories/userRepository");
async function listarUsuarios() {
    return await userRepository.listarUsuarios();
}
async function buscarUsuarioPorId(id) {
    throw new Error("Teste de erro");
/*    return await userRepository.buscarUsuarioPorId(id);*/
}
async function criarUsuario(usuario) {
    if (!usuario.nome) {
        throw new Error("Nome é obrigatório");
    }
    return await userRepository.criarUsuario(usuario);
}
async function atualizarUsuario(id, dadosAtualizados) {
    return await userRepository.atualizarUsuario(id, dadosAtualizados);
}
async function deletarUsuario(id) {
    return await userRepository.deletarUsuario(id);
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};