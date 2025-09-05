const usuarios = ['Daniela', 'José', 'Bianca', 'Marcos']

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nomeNovoUsuario) {
    usuarios.push(nomeNovoUsuario)
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}

