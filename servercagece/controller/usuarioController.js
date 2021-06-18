const express = require('express');
const rota = express.Router();
const UsuarioModel = require('../model/UsuarioModel');
const MensagemEvento = require('../model/MensgemEvento');


rota.get("/",function(req,res,next){
  UsuarioModel.getAtendimento(function(erro,retorno){
     let mensagemEvento = new MensagemEvento();
     if(erro){
       mensagemEvento = true;
       mensagemEvento.mensagem="Erro ao recuperar dados banco";
       console.log('Erro',erro);
     }else{
       mensagemEvento.dados = retorno;
     }
     res.json(mensagemEvento);
   })
});
rota.get("/:cpf?",function(req,res,next){
  UsuarioModel.getAtendimentoId(req.params.cpf,function(erro,retorno){
    let mensagemEvento = new MensagemEvento();
    if(erro){
      mensagemEvento = true;
      mensagemEvento.mensagem="Erro ao recuperar dados banco";
      console.log('Erro',erro);
    }else{
      mensagemEvento.dados = retorno;
    }
    res.json(mensagemEvento);
  })
});

rota.post("/?",function(req,res,next){
  UsuarioModel.adicionar(req.body,function(erro,retorno){
    let mensagemEvento = new MensagemEvento();
    if(erro){
      mensagemEvento = true;
      mensagemEvento.mensagem="Erro ao recuperar dados banco";
      console.log('Erro',erro);
    }else{
      if(retorno.affectedRows > 0){
        mensagemEvento.mensagem="Cadastrado Atendimento!";
      }else{
        mensagemEvento.mensagem=" Atendimento nao cadastrado";
      }
    }
    res.json(mensagemEvento);
  })
});

rota.delete("/:cpf",function(req,res,next){
  UsuarioModel.deletar(req.params.cpf,function(erro,retorno){
    let mensagemEvento = new MensagemEvento();
    if(erro){
      mensagemEvento = true;
      mensagemEvento.mensagem="Erro ao recuperar dados banco";
      console.log('Erro',erro);
    }else{
      if(retorno.affectedRows > 0){
        mensagemEvento.mensagem="Atendimento excluido!";
      }else{
        mensagemEvento.mensagem=" Atendimento nao excluido";
      }
    }
    res.json(mensagemEvento);
  })
});
rota.put("/",function(req,res,next){
  UsuarioModel.editar(req.body,function(erro,retorno){
    let mensagemEvento = new MensagemEvento();
    if(erro){
      mensagemEvento = true;
      mensagemEvento.mensagem="Erro ao recuperar dados banco";
      console.log('Erro',erro);
    }else{
      if(retorno.affectedRows > 0){
        mensagemEvento.mensagem="Atendimento atualizado!";
      }else{
        mensagemEvento.mensagem=" Atendimento nao atualizado";
      }
    }
    res.json(mensagemEvento);
  })
});
module.exports = rota;

/* get que recebe dados do banco e envia  res no formato json
 rota.get("/",function(req,res,next){
    AtendimentoModel.getAtendimento().then(data => {
      res.json(data);
    }).catch(err =>{
        res.json(err);
    });
    next();
});

*/