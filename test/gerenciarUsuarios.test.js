const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios.js');
const { expect } = require('chai');


describe('Testar as funções de Gestão de Usuários', () => {
    it('Validar que posso adicionar um novo nome de usuário na lista', () => {
        adicionarNovoUsuario('Augusto');

        const listaDeUsuarios = retornarUsuarios();

        expect(listaDeUsuarios.at(-1)).to.equal('Augusto');

    });
    
});