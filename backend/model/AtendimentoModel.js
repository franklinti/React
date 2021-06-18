const conexao = require('../conexaoBanco/conexao');


module.exports = class AtendimentoModel{
    static getAtendimento(callBack){
        return conexao.query("SELECT * FROM atendimentos",callBack);
    }
    static getAtendimentoId(cpf,callBack){
        return conexao.query("SELECT * FROM atendimentos WHERE cpf = ?",[cpf],callBack);
    }
    static adicionar(atendimento,callback){
        return conexao.query("INSERT INTO atendimentos(nome,cpf,dataNascimento,estado) VALUES(?,?,?,?)",[atendimento.nome,atendimento.cpf,atendimento.dataNascimento,atendimento.estado],callback);
    }
    static deletar(cpf,callback){
        return conexao.query("DELETE FROM atendimentos WHERE cpf = ?",[cpf],callback);
    }
    static editar(atendimento,callback){
        return conexao.query("UPDATE atendimentos SET nome =?,cpf =?,dataNascimento =?,estado =? WHERE cpf = ?",[atendimento.nome,atendimento.cpf,atendimento.dataNascimento,atendimento.estado,atendimento.cpf],callback);
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