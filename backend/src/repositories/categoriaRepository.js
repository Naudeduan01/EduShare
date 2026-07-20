const pool = require("../config/database");
async function listarCategorias() {
    const resultado = await pool.query(`
        SELECT *
        FROM categorias
        ORDER BY nome;
    `);
    return resultado.rows;
}
async function buscarCategoriaPorId(id) {
    const resultado = await pool.query(
        `
        SELECT *
        FROM categorias
        WHERE id = $1;
        `,
        [id]
    );
    return resultado.rows[0];
}
async function criarCategoria(nome) {
    const resultado = await pool.query(
        `
        INSERT INTO categorias (nome)
        VALUES ($1)
        RETURNING *;
        `,
        [nome]
    );
    return resultado.rows[0];
}
async function atualizarCategoria(id, nome) {
    const resultado = await pool.query(
        `
        UPDATE categorias
        SET nome = $1
        WHERE id = $2
        RETURNING *;
        `,
        [nome, id]
    );
    return resultado.rows[0];
}
async function excluirCategoria(id) {
    const resultado = await pool.query(
        `
        DELETE FROM categorias
        WHERE id = $1
        RETURNING *;
        `,
        [id]
    );
    return resultado.rows[0];
}
module.exports = {
    listarCategorias,
    buscarCategoriaPorId,
    criarCategoria,
    atualizarCategoria,
    excluirCategoria
};