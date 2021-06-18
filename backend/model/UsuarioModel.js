const conexao = require('../conexaoBanco/conexao');


module.exports = class UsuarioModel{
    static getusuario(callBack){
        return conexao.query("SELECT * FROM usuarios",callBack);
    }
    static getusuarioId(cpf,callBack){
        return conexao.query("SELECT * FROM usuarios WHERE cpf = ?",[cpf],callBack);
    }
    static adicionar(usuario,callback){
        return conexao.query("INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",[usuario.nome,usuario.email,usuario.senha],callback);
    }
    static deletar(cpf,callback){
        return conexao.query("DELETE FROM usuarios WHERE cpf = ?",[cpf],callback);
    }
    static editar(usuario,callback){
        return conexao.query("UPDATE usuarios SET nome =?,cpf =?,dataNascimento =?,estado =? WHERE cpf = ?",[atendimento.nome,atendimento.cpf,atendimento.dataNascimento,atendimento.estado,atendimento.cpf],callback);
    }
};

/* 
    requisicao dados banco mysql utilizando sequelize
    const at = require ('../schema/atendimento/AtendimentoSchema');

        function getAtendimento(){
    return new Promise((resolve,reject)=>{
        at.findAll().then(res =>{
            resolve(res);
        }).catch(err =>{
            console.log(`Erro conexao banco:${err};`);
        })
    }) ;

    }
    module.exports = {getAtendimento};
*/