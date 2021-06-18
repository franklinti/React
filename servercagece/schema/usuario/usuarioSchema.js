const sequelize = require('sequelize')
const conexao = require('../../conexaoBanco/conexao')

//criando tabela usuario banco
const usuarios = conexao.define('usuarios',{
    nome:{
        type: sequelize.STRING,
        allowNull : false
    },
    email:{
        type:sequelize.STRING,
        allowNull : false

    },
    senha:{
        type:sequelize.STRING,
        allowNull : false
    },
    senha1:{
        type:sequelize.STRING,
        allowNull : false
    }
});

usuarios.sync({force:false}).then(() => {
    console.log('Criado Tabela:Usuarios')
}).catch(() => {console.log('Erro!')})

module.exports = usuarios;