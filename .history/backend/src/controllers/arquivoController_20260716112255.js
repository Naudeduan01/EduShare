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
        },
        const resultado = await arquivoService.salvarArquivo(arquivo);
        res.statur(201).json(resultado);
    
    } catch(error) {
        next(error);
    }
}