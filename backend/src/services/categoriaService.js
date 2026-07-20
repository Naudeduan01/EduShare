const categoriaRepository = require("../repositories/categoriaRepository");

async function listarCategorias() {

    return await categoriaRepository.listarCategorias();

}

async function buscarCategoriaPorId(id) {

    return await categoriaRepository.buscarCategoriaPorId(id);

}

async function criarCategoria(nome) {

    return await categoriaRepository.criarCategoria(nome);

}

async function atualizarCategoria(id, nome) {

    return await categoriaRepository.atualizarCategoria(id, nome);

}

async function excluirCategoria(id) {

    return await categoriaRepository.excluirCategoria(id);

}

module.exports = {

    listarCategorias,
    buscarCategoriaPorId,
    criarCategoria,
    atualizarCategoria,
    excluirCategoria

};