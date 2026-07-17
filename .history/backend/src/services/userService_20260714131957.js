const userRepository = require("../repositories/userRepository");
function listarUsuarios() {
    return userRepository.listarUsuarios();
}
function buscarUsuarioPorId(id) {
    return userRepository.buscarUsuarioPorId(id);
}
function criarUsuario(usuario) {
    if (!usuario.nome) {
        throw new Error("Nome é obrigatório");
    }
    return userRepository.criarUsuario(usuario);
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