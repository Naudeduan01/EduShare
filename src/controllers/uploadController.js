async function uploadArquivo(req, res){
    res.json(req.file);
}
module.exports = {
    uploadArquivo
};