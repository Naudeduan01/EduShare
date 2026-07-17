const fs = require("fs");
const arquivoService = require("../services/arquivoService");
async function salvarArquivo(req, res, next){
    try {
        const arquivo = {
            trabalho_id: req.params.id,
            nome_original: req.file.originalname,
            nome_salvo: req.file.filename,
            caminho: req.file.path,
            tipo: req.file.mimetype,
            tamanho: req.file.size
        };
        const resultado = await arquivoService.salvarArquivo(arquivo);
        res.status(201).json(resultado);
    
    } catch(error) {
        next(error);
    }
}
async function listarArquivosPorTrabalho(req, res, next) {
    try {
        const arquivos =
            await arquivoService.listarArquivosPorTrabalho(
                req.params.id
            );
        res.json(arquivos);
    } catch (error) {
        next(error);
    }
}
async function excluirArquivo(req, res, next) {
    try {
        const arquivo =
            await arquivoService.excluirArquivo(req.params.id);
        if (!arquivo) {
            return res.status(404).json({
                mensagem: "Arquivo não encontrado"
            });
        }
        fs.unlink(arquivo.caminho, function (erro) {
            if (erro) {
                console.error(erro);
            }
        });
        res.json({
            mensagem: "Arquivo removido com sucesso"
        });
    } catch (error) {
        next(error);
    }
}
async function baixarArquivo(req, res, next) {
    try {
        const arquivo =
            await arquivoService.buscarArquivoPorId(
                req.params.id
            );
        if (!arquivo) {
            return res.status(404).json({
                mensagem: "Arquivo não encontrado"
            });
        }
        res.download(
            arquivo.caminho,
            arquivo.nome_original
        );
    } catch (error) {
        next(error);
    } 
}
module.exports = {
    salvarArquivo,
    listarArquivosPorTrabalho,
    excluirArquivo,
    baixarArquivo
};