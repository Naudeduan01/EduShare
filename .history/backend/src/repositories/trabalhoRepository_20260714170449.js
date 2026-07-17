const pool = require("../config/database");
async function listarTrabalhos(){
    const resultado = await pool.query(
        "SELECT * FROM trabalhos ORDER BY id;"
    );
    return resultado.rows;
}
module.exports = {
    listarTrabalhos
}