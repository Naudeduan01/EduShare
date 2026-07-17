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
            categoria,
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
            trabalho.categoria,
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
            categoria = $3,
            criador_id = $4,
            status = $5,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
        RETURNING *;
        `,
        [
            trabalho.titulo,
            trabalho.descricao,
            trabalho.categoria,
            trabalho.criador_id,
            trabalho.status,
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
module.exports = {
    listarTrabalhos,
    criarTrabalho,
    buscarTrabalhoPorId,
    atualizarTrabalho,
    excluirTrabalho
};