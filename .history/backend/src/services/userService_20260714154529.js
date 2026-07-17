const AppError = require("../errors/AppError");
const userRepository = require("../repositories/userRepository");
async function listarUsuarios() {
    return await userRepository.listarUsuarios();
}
async function buscarUsuarioPorId(id) {
    const usuario =
        await userRepository.buscarUsuarioPorId(id);
    if (!usuario) {
        throw new AppError(
            "Usuário não encontrado",
            404
        );
    }
    return usuario;
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