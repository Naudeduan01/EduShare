const trabalhoService = require("../services/trabalhoService");
async function listarTrabalhos(req, res, next){
    try {
        const trabalhos = await trabalhoService.listarTrabalhos();
        res.json(trabalhos);
    } catch (error) {
        next(error);
    }
}
async function criarTrabalho(req, res, next) {
    try {
        const trabalho = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            categoria_id: req.body.categoria_id,
            criador_id: req.usuario.id
        };
        const novoTrabalho =
            await trabalhoService.criarTrabalho(trabalho);
        res.status(201).json(novoTrabalho);
    } catch (error) {
        next(error);
    }
}
async function buscarTrabalhoPorId(req, res, next) {
    try {
        const trabalho =
            await trabalhoService.buscarTrabalhoPorId(req.params.id);
        if (!trabalho) {
            return res.status(404).json({
                mensagem: "Trabalho não encontrado"
            });
        }
        res.json(trabalho);
    } catch (error) {
        next(error);
    }
}
async function atualizarTrabalho(req, res, next) {
    try {
        const trabalho =
            await trabalhoService.buscarPorId(req.params.id);
        if (!trabalho) {
            return res.status(404).json({
                mensagem: "Trabalho não encontrado"
            });
        }
        if (trabalho.criador_id !== req.usuario.id) {
            return res.status(403).json({
                mensagem: "Você não tem permissão para alterar este trabalho"
            });
        }
        const trabalhoAtualizado =
            await trabalhoService.atualizarTrabalho(
                req.params.id,
                req.body
            );
        res.json(trabalhoAtualizado);
    } catch (error) {
        next(error);
    }
}
async function excluirTrabalho(req, res, next) {
    try {
        const trabalho =
            await trabalhoService.buscarPorId(req.params.id);
        if (!trabalho) {
            return res.status(404).json({
                mensagem: "Trabalho não encontrado"
            });
        }
        if (trabalho.criador_id !== req.usuario.id){
            return res.status(402).json({
                mensagem: "Você não tem permissão para excluir esse trabalho"
            });
        }
        res.json({
            mensagem: "Trabalho excluído com sucesso"
        });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    listarTrabalhos,
    criarTrabalho,
    buscarTrabalhoPorId,
    atualizarTrabalho,
    excluirTrabalho
};