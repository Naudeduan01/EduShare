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
async function deletarUsuario(id) {
    const resultado = await pool.query(
        `
        DELETE FROM usuarios
        WHERE id = $1
        RETURNING *
        `,
        [id]
    );
    return resultado.rows[0];
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};