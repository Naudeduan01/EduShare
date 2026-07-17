const usuarios = [
    {
        id: 1,
        nome: "Eduan",
        idade: 34
    },
    {
        id: 2,
        nome: "João",
        idade: 20
    }
];
function listarUsuarios() {
    return usuarios;
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
const indice = usuarios.findIndex(function (usuario) {
    return usuario.id === id;
    if (indice === -1) {
        return null;
    }    
const usuarioRemovido = usuarios[indice];
    usuarios.splice(indice, 1);
    return usuarioRemovido;
});
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};