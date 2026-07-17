const pool = require("../config/database");
async function listarUsuarios() {
    const resultado = await pool.query(
        "SELECT * FROM usuarios"
    );
    return resultado.rows;
}
function buscarUsuarioPorId(id) {
    return usuarios.find(function (usuario) {
        return usuario.id === id;
    });
}
function criarUsuario(usuario) {
    const ultimoUsuario = usuarios[usuarios.length - 1];
    const novoId = ultimoUsuario
        ? ultimoUsuario.id + 1
        : 1;
    const novoUsuario = {
        id: novoId,
        ...usuario
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
}
function atualizarUsuario(id, dadosAtualizados) {
    const usuario = buscarUsuarioPorId(id);
    if (!usuario) {
        return null;
    }
    Object.assign(usuario, dadosAtualizados);
    return usuario;
}
function deletarUsuario(id) {
    const indice = usuarios.findIndex(function (usuario) {
        return usuario.id === id;
    });
    if (indice === -1) {
        return null;
    }
    const usuarioRemovido = usuarios[indice];
    usuarios.splice(indice, 1);
    return usuarioRemovido;
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};