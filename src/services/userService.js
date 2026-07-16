const bcrypt = require("bcrypt");
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
    const senhaCriptografada =
        await bcrypt.hash(usuario.senha, 10);
    usuario.senha = senhaCriptografada;
    return await userRepository.criarUsuario(usuario);
}
async function atualizarUsuario(id, dadosAtualizados) {
    return await userRepository.atualizarUsuario(id, dadosAtualizados);
}
async function deletarUsuario(id) {
    return await userRepository.deletarUsuario(id);
}
async function buscarPorEmail(email){
    return await userRepository.buscarPorEmail(email);
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarPorEmail
};