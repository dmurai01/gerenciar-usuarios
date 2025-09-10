// const usuarios = ['Daniela', 'José', 'Bianca', 'Marcos']
const usuarios = [
    {
        nome: 'Daniela',
        email: 'dani@teste.com'
    },
    {
        nome: 'José',
        email: 'jose@teste.com'
    },
    {
        nome: 'Bianca',
        email: 'bianca@teste.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@teste.com'
    }
]

function retornarUsuarios() {
    return usuarios;
}

// function adicionarNovoUsuario(nomeNovoUsuario) {
//     usuarios.push(nomeNovoUsuario)
// }
function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario)
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}

