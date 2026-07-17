function removerSenha(usuario){
    const { senha, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha;
}
module.exports = removerSenha;