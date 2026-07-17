const trabalhoRepository = require("../repositories/trabalhoRepository");
async function listarTrabalhos(){
    return await trabalhoRepository.listarTrabalhos();
}
module.exports = {
    listarTrabalhos
};