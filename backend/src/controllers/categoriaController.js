const categoriaService = require("../services/categoriaService");

async function listarCategorias(req, res, next) {

    try {

        const categorias = await categoriaService.listarCategorias();

        res.json(categorias);

    } catch (error) {

        next(error);

    }

}

async function buscarCategoria(req, res, next) {

    try {

        const categoria =
            await categoriaService.buscarCategoriaPorId(req.params.id);

        if (!categoria) {

            return res.status(404).json({
                mensagem: "Categoria não encontrada"
            });

        }

        res.json(categoria);

    } catch (error) {

        next(error);

    }

}

async function criarCategoria(req, res, next) {

    try {

        const categoria =
            await categoriaService.criarCategoria(req.body.nome);

        res.status(201).json(categoria);

    } catch (error) {

        next(error);

    }

}

async function atualizarCategoria(req, res, next) {

    try {

        const categoria =
            await categoriaService.atualizarCategoria(
                req.params.id,
                req.body.nome
            );

        res.json(categoria);

    } catch (error) {

        next(error);

    }

}

async function excluirCategoria(req, res, next) {

    try {

        await categoriaService.excluirCategoria(req.params.id);

        res.json({
            mensagem: "Categoria removida com sucesso"
        });

    } catch (error) {

        next(error);

    }

}

module.exports = {

    listarCategorias,
    buscarCategoria,
    criarCategoria,
    atualizarCategoria,
    excluirCategoria

};