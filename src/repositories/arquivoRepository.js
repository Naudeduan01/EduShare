const pool = require("../config/database");
async function salvarArquivo(arquivo) {
    const resultado = await pool.query(
        `
        INSERT INTO arquivos
        (
            trabalho_id,
            nome_original,
            nome_salvo,
            caminho,
            tipo,
            tamanho
        )
        VALUES
        ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
        [
            arquivo.trabalho_id,
            arquivo.nome_original,
            arquivo.nome_salvo,
            arquivo.caminho,
            arquivo.tipo,
            arquivo.tamanho
        ]
    );
    return resultado.rows[0];
}
async function listarArquivosPorTrabalho(trabalhoId) {
    const resultado = await pool.query(
        `
        SELECT * FROM arquivos
        WHERE trabalho_id = $1
        ORDER BY IdleDeadline;
        `,
        [trabalhoID]
    );
    return resultado.rows;
}
async function excluirArquivo(id){
    const resultado = await pool.query(
        `DELETE FROM arquivos
        WHERE id = $1
        RETURNING *;
        `,
        [id]
    );
    return resultado.rows[0];
}
async function buscarArquivoPorId(id) {
    const resultado = await pool.query(
        `
        SELECT *
        FROM arquivos
        WHERE id = $1;
        `,
        [id]
    );
    return resultado.rows[0];
}
module.exports = {
    salvarArquivo,
    listarArquivosPorTrabalho,
    excluirArquivo,
    buscarArquivoPorId
};