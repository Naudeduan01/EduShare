const userService = require("../services/userService");
async function listarUsuarios(req, res) {
    const usuarios =
        await userService.listarUsuarios();
    res.json(usuarios);
}
async function buscarUsuarioPorId(req, res) {
    console.log("ID recebido:", req.params.id);
    const id = Number(req.params.id);
    const usuario = 
        await userService.buscarUsuarioPorId(id);
    if (!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }
    res.json(usuario);
}
async function criarUsuario(req, res) {
    const novoUsuario = req.body;
    const usuarioCriado = 
        await userService.criarUsuario(novoUsuario);
    res.status(201).json(usuarioCriado);
}
async function atualizarUsuario(req, res) {
    const id = Number(req.params.id);
    const dadosAtualizados = req.body;
    const usuarioAtualizado =
        await userService.atualizarUsuario(id, dadosAtualizados);
    if (!usuarioAtualizado) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }
    res.json(usuarioAtualizado);
}
async function deletarUsuario(req,res){
    const id = Number(req.params.id);
    const usuarioRemovido =
        await userService.deletarUsuario(id);
    if(!usuarioRemovido){
        return res.status(404).json({
            mensagem:"Usuário não encontrado"
        });
    }
    res.json(usuarioRemovido);
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
