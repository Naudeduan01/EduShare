const usuarioSchema = require("../schemas/usuarioSchema");
const removerSenha = require("../utils/removerSenha");
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
        const erro = new Error("Usuário não encontrado");
        erro.status = 404;
        throw erro;
    }
    res.json(usuario);
}
async function criarUsuario(req, res, next) {
    try {
        usuarioSchema.parse(req.body);
        const resultado =
            await userService.criarUsuario(usuario);
        res.status(201).json(removerSenha(resultado));
    } catch(error) {
        next(error);
    }
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
