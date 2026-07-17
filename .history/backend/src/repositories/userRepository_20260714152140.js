const pool = require("../config/database");
async function listarUsuarios() {
    const resultado = await pool.query(
        "SELECT * FROM usuarios"
    );
    return resultado.rows;
}
async function buscarUsuarioPorId(id) {
    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE id = $1",
        [id]
    );
    return resultado.rows[0];
}
async function criarUsuario(usuario) {
    const resultado = await pool.query(
        "INSERT INTO usuarios(nome, idade) VALUES($1, $2) RETURNING *",
        [
            usuario.nome,
            usuario.idade
        ]
    );
    return resultado.rows[0];
}
async function atualizarUsuario(id, dadosAtualizados) {
    const resultado = await pool.query(
        `
        UPDATE usuarios
        SET nome = $1,
            idade = $2
        WHERE id = $3
        RETURNING *
        `,
        [
            dadosAtualizados.nome,
            dadosAtualizados.idade,
            id
        ]
    );
    return resultado.rows[0];
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