const pool = require("../config/database");
async function listarTrabalhos(){
    const resultado = await pool.query(
        "SELECT * FROM trabalhos ORDER BY id;"
    );
    return resultado.rows;
}
async function criarTrabalho(trabalho) {
    const resultado = await pool.query(
        `
        INSERT INTO trabalhos
        (
            titulo,
            descricao,
            categoria_id,
            criador_id
        )
        VALUES
        (
            $1,
            $2,
            $3,
            $4
        )
        RETURNING *;
        `,
        [
            trabalho.titulo,
            trabalho.descricao,
            trabalho.categoria_id,
            trabalho.criador_id
        ]
    );
    return resultado.rows[0];
}
async function buscarTrabalhoPorId(id) {
    const resultado = await pool.query(
        `
        SELECT *
        FROM trabalhos
        WHERE id = $1;
        `,
        [id]
    );
    return resultado.rows[0];
}
async function atualizarTrabalho(id, trabalho) {
    const resultado = await pool.query(
        `
        UPDATE trabalhos
        SET
            titulo = $1,
            descricao = $2,
            categoria_id = $3,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *;
        `,
        [
            trabalho.titulo,
            trabalho.descricao,
            trabalho.categoria_id,
            id
        ]
    );
    return resultado.rows[0];
}
async function excluirTrabalho(id) {
    const resultado = await pool.query(
        `
        DELETE FROM trabalhos
        WHERE id = $1
        RETURNING *;
        `,
        [id]
    );
    return resultado.rows[0];
}
async function buscarPorId(id) {
    const resultado = await pool.query(
        `
        SELECT *
        FROM trabalhos
        WHERE id = $1;
        `,
        [id]
    );
    return resultado.rows[0];
}
module.exports = {
    listarTrabalhos,
    criarTrabalho,
    buscarTrabalhoPorId,
    atualizarTrabalho,
    excluirTrabalho,
    buscarPorId
};