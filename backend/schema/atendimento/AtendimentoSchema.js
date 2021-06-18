const sequelize = require('sequelize');
const conexao = require('../../conexaoBanco/conexao')

//criando tabela usuario banco
const Atendimentos =  conexao.define('atendimentos',{
    id:{ 
        type: sequelize.UUID,
        defaultValue:sequelize.UUIDV4,
        allowNull: false
    },
    nome:{
        allowNull : false,
        type: sequelize.STRING
    },
    cpf:{allowNull : false,
        primaryKey: true,
        type:sequelize.STRING
    },
    dataNascimento:{allowNull : true,
        type:sequelize.STRING
        
    },
    estado:{
        allowNull : true,
        type:sequelize.STRING
    }
});

Atendimentos.sync({force:false}).then(() => {
    console.log('Criado Tabela:Atendimentos');
}).catch(() => {console.log('Tabela Atendimentos nao criado!')})


module.exports = Atendimentos;