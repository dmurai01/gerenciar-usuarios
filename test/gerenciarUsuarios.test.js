const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios.js');
const { expect } = require('chai');


describe('Testar as funções de Gestão de Usuários', () => {
    it('Validar que posso adicionar um novo nome de usuário na lista', () => {
        // adicionarNovoUsuario('Augusto');
        adicionarNovoUsuario(
            {
                nome: 'Cleide',
                email: 'cleide@teste.com'
            }
        );

        const listaDeUsuarios = retornarUsuarios();

        // expect(listaDeUsuarios.at(-1).nome).to.equal('Cleide');
        // expect(listaDeUsuarios.at(-1).email).to.equal('cleide@teste.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
                nome: 'Cleide',
                email: 'cleide@teste.com'
            })
    });
    
});