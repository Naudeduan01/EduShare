const userRepository = require("../repositories/userRepository");
async function listarUsuarios() {
    return await userRepository.listarUsuarios();
}
async function buscarUsuarioPorId(id) {
    return await userRepository.buscarUsuarioPorId(id);
}
async function criarUsuario(usuario) {
    if (!usuario.nome) {
        throw new Error("Nome é obrigatório");
    }
    return await userRepository.criarUsuario(usuario);
}
function atualizarUsuario(id, dadosAtualizados) {
    return userRepository.atualizarUsuario(id, dadosAtualizados);
}
function deletarUsuario(id) {
    return userRepository.deletarUsuario(id);
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};