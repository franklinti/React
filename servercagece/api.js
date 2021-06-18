const express = require('express');
const cors = require('cors');

//criando instancia express
const app = express();
//definindo a porta
const port = 3001;
//criando instancia do router para criar as roas
const router = express.Router();

//recuperado as instancias
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//capturando as rotas
router.get("/",(req,res)=>{res.json({
    mensagem: 'Api online'
})});

app.use('/',router);
//referencia da rota atendimentoRota
const atendimentoController = require('./controller/atendimentoController');
const usuarioController = require('./controller/usuarioController');
app.use('/atendimento',atendimentoController);
app.use('/usuario',usuarioController);

app.listen(port,() => {
    console.log(`Servidor iniciado na porta: ${port}`);
});

//criando tabela atendimento sequelize
//const AtendimentoSchema = require('./schema/atendimento/AtendimentoSchema');

/*
//insercao teste utilizando sequelize
const rc = AtendimentoSchema.create({
    nome:'t',
    cpf:'123',
    dataNascimento:'20210617',
    estado:'ce'
})
const rc1 = AtendimentoSchema.create({
    nome:'f',
    cpf:'124',
    dataNascimento:'20210617',
    estado:'ce'
})

const usuarios = require('./models/usuario');
const cryptSenha = require('bcrypt');
const session = require('express-session');
const { response } = require('express');
//criando sessao do usuario
app.use(session({
    secret:'keyboard',
    name:'cookie',
    proxy:true,
    saveUninitialized:true

}))

app.use((req, res, next) => {
	// "*" - qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.post('/usuarios',(req,res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const senha1 = req.body.senha1;
    //converter senha  em hash
    const salt = cryptSenha.genSaltSync(2);
    const hashSenha = cryptSenha.hashSync(senha,salt)
    const hashSenha1 = cryptSenha.hashSync(senha1,salt)
    usuarios.findOne({where:{email:email}}).then(result =>{
        if(result != null){
                return res.json('existe');
        }else{
            usuarios.create({
                nome: nome,
                email: email,
                senha: hashSenha,
                senha1: hashSenha1,
                
            }).then(()=> {return  res.json('salvo')})
        }
    })
});
app.post('/login',(req,res)=>{
    const email = req.body.email;
    const senha = req.body.senha;
    usuarios.findOne({where:{email:email}}).then(result =>{
    var verificaSenha = cryptSenha.compareSync(senha,result.senha);
    if(verificaSenha){
        req.session.result ={
            id:result.id,
            nome:result.nome,
            email:result.email
           
        }
        return res.send(req.session.result);
    }else{
        return res.json('senha invalida!');
    }

})
})

//escutando as requsicoes
*/